import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { marked } from 'marked';
import { postHref, type Lang } from '../lib/blog';

export async function GET({ site }: { site?: URL }) {
  if (!site) {
    throw new Error('Set the production site URL in astro.config.mjs to generate the RSS feed.');
  }

  const [englishPosts, portuguesePosts] = await Promise.all([
    getCollection('blog-en', ({ data }) =>
      import.meta.env.PROD ? data.draft !== true : true,
    ),
    getCollection('blog-pt', ({ data }) =>
      import.meta.env.PROD ? data.draft !== true : true,
    ),
  ]);
  const posts = [...englishPosts, ...portuguesePosts].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: 'David Silva | AI Engineering and Software',
    description:
      'Writing about AI engineering, production systems, teaching, and building software that solves real problems.',
    site,
    items: await Promise.all(
      posts.map(async (post) => {
        const lang: Lang = post.collection === 'blog-pt' ? 'pt' : 'en';
        if (!post.body) {
          throw new Error(`Cannot generate RSS content without a Markdown body: ${post.id}`);
        }

        return {
          title: post.data.title,
          description: post.data.description,
          pubDate: post.data.pubDate,
          link: postHref(post.id, lang),
          categories: post.data.tags,
          content: await marked.parse(post.body),
        };
      }),
    ),
  });
}
