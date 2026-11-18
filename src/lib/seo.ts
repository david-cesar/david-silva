import type { SeoProps } from '@jdevalk/astro-seo-graph';
import {
  assembleGraph,
  buildArticle,
  buildBreadcrumbList,
  buildPiece,
  buildWebPage,
  buildWebSite,
  makeIds,
} from '@jdevalk/seo-graph-core';

export const SITE_URL = 'https://davidsilva.site';
const PERSON_URL = new URL('/about/', SITE_URL).href;
const BLOG_URL = new URL('/blog/', SITE_URL).href;
const BLOG_ID = `${BLOG_URL}#blog`;
const ids = makeIds({ siteUrl: SITE_URL, personUrl: PERSON_URL });

export type HreflangAlternates = NonNullable<SeoProps['alternates']>;

export function createHreflangAlternates(
  englishPath: string,
  portuguesePath: string,
): HreflangAlternates {
  return {
    defaultLocale: 'en',
    entries: [
      { hreflang: 'en', href: new URL(englishPath, SITE_URL).href },
      { hreflang: 'pt-BR', href: new URL(portuguesePath, SITE_URL).href },
    ],
  };
}

interface PageGraphOptions {
  url: string;
  title: string;
  description: string;
  lang: 'en' | 'pt-BR';
  kind?: 'webpage' | 'profile' | 'collection' | 'article';
  publishDate?: Date;
  updatedDate?: Date;
  tags?: string[];
  breadcrumbs: { name: string; url: string }[];
}

export function createPageGraph({
  url,
  title,
  description,
  lang,
  kind = 'webpage',
  publishDate,
  updatedDate,
  tags = [],
  breadcrumbs,
}: PageGraphOptions): Record<string, unknown> {
  const person = buildPiece({
    '@type': 'Person',
    '@id': ids.person,
    name: 'David Silva',
    url: PERSON_URL,
    jobTitle: lang === 'pt-BR' ? 'Engenheiro de software' : 'Software engineer',
  });
  const blog = buildPiece({
    '@type': 'Blog',
    '@id': BLOG_ID,
    name: lang === 'pt-BR' ? 'Blog de David Silva' : "David Silva's Blog",
    publisher: { '@id': ids.person },
    inLanguage: lang,
  });
  const website = buildWebSite(
    {
      url: new URL('/', SITE_URL).href,
      name: 'David Silva',
      description:
        'Writing about AI engineering, production software, teaching, and tabletop role-playing.',
      publisher: { '@id': ids.person },
      hasPart: { '@id': BLOG_ID },
      inLanguage: 'en',
    },
    ids,
  );
  const page = buildWebPage(
    {
      url,
      name: title,
      description,
      isPartOf: { '@id': ids.website },
      breadcrumb: { '@id': ids.breadcrumb(url) },
      about: kind === 'profile' ? { '@id': ids.person } : undefined,
      inLanguage: lang,
    },
    ids,
    kind === 'profile'
      ? 'ProfilePage'
      : kind === 'collection'
        ? 'CollectionPage'
        : 'WebPage',
  );
  const pieces = [
    person,
    blog,
    website,
    page,
    buildBreadcrumbList({ url, items: breadcrumbs }, ids),
  ];

  if (kind === 'article') {
    if (!publishDate) {
      throw new Error(`BlogPosting schema requires a publication date: ${url}`);
    }

    pieces.push(
      buildArticle(
        {
          url,
          isPartOf: { '@id': ids.webPage(url) },
          author: { '@id': ids.person },
          publisher: { '@id': ids.person },
          headline: title,
          description,
          inLanguage: lang,
          datePublished: publishDate,
          dateModified: updatedDate,
          articleSection: tags[0],
        },
        ids,
        'BlogPosting',
      ),
    );
  }

  return assembleGraph(pieces, { warnOnDanglingReferences: true });
}
