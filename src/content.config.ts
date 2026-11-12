import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  // Shared key linking the EN and PT versions of the same post.
  translationKey: z.string().optional(),
  // URL of the matching LinkedIn post, if published there.
  linkedinUrl: z.string().url().optional(),
});

const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-en' }),
  schema: postSchema,
});

const blogPt = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-pt' }),
  schema: postSchema,
});

// Editable page copy (About, RPG, home bio). Files named `<page>.<lang>.md`
// (e.g. about.en.md, about.pt.md). Edit the prose here, not in the .astro.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'blog-en': blogEn,
  'blog-pt': blogPt,
  pages,
};
