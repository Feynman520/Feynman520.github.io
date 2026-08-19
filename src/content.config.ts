import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    tagline: z.string(),
    status: z.string(),
    order: z.number().default(99),
    cover: z.string(),
    spec: z.string(),
    recipes: z.number().default(0),
    store: z.array(z.object({ name: z.string(), url: z.string() })).default([]),
    downloads: z
      .array(
        z.object({
          label: z.string(),
          file: z.string(),
          size: z.string().optional(),
          note: z.string().optional(),
        }),
      )
      .default([]),
    updated: z.string(),
  }),
});

const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    book: z.string().optional(),
  }),
});

export const collections = { books, updates };
