import { getCollection, render } from 'astro:content';
import type { Lang } from './blog';

/**
 * Load an editable page's rendered content and frontmatter.
 * Files live in src/content/pages/ named `<name>-<lang>.md`
 * (e.g. about-en.md, about-pt.md). The glob loader strips dots from ids,
 * so a hyphen keeps the id clean and predictable.
 */
export async function getPage(name: string, lang: Lang) {
  const pages = await getCollection('pages');
  const id = `${name}-${lang}`;
  const entry = pages.find((p) => p.id === id);
  if (!entry) {
    const ids = pages.map((p) => p.id).join(', ');
    throw new Error(`Missing page content: ${id} (have: ${ids})`);
  }
  const { Content } = await render(entry);
  return { Content, data: entry.data };
}
