import { z, defineCollection } from 'astro:content';

const workplacesCollection = defineCollection({
  type: 'content',
  schema: z.object({
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
