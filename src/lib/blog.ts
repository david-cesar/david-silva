import { getCollection, type CollectionEntry } from 'astro:content';

export type Lang = 'en' | 'pt';
export type Post = CollectionEntry<'blog-en'> | CollectionEntry<'blog-pt'>;

const collectionFor = (lang: Lang) => (lang === 'pt' ? 'blog-pt' : 'blog-en');

/** Published posts for a locale, newest first, drafts excluded in production. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection(collectionFor(lang), ({ data }) => {
    return import.meta.env.PROD ? data.draft !== true : true;
  });
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

/** Format a date for display in the given locale. */
export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** URL-safe slug for a tag (lowercase, spaces to dashes, strip accents). */
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip combining accent marks
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Base path for a locale's blog ("/blog" or "/pt/blog"). */
export function blogBase(lang: Lang): string {
  return lang === 'pt' ? '/pt/blog' : '/blog';
}

/** Link to a post. */
export function postHref(id: string, lang: Lang): string {
  return `${blogBase(lang)}/${id}/`;
}

/** Link to a tag page. */
export function tagHref(tag: string, lang: Lang): string {
  return `${blogBase(lang)}/tag/${tagSlug(tag)}/`;
}

/** Collect every unique tag in a locale with its original label and post count. */
export async function getTags(
  lang: Lang,
): Promise<{ tag: string; slug: string; count: number }[]> {
  const posts = await getPosts(lang);
  const map = new Map<string, { tag: string; count: number }>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = tagSlug(tag);
      const entry = map.get(slug);
      if (entry) entry.count += 1;
      else map.set(slug, { tag, count: 1 });
    }
  }
  return [...map.entries()].map(([slug, { tag, count }]) => ({
    tag,
    slug,
    count,
  }));
}
