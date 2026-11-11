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

export const collections = {
  'blog-en': blogEn,
  'blog-pt': blogPt,
};
