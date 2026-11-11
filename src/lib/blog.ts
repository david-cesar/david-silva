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
