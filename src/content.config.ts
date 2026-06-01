import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const workplacesCollection = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: 'src/content/workplaces',
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    dates: z.string(),
    place: z.string(),
    description: z.string(),
    metaDescription: z.string(),
  }),
});

export const collections = {
  workplaces: workplacesCollection,
};
