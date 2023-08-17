import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
    tags: z.array(z.string()),
		heroImage: z.string().optional(),
	}),
});

const client = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    content: z.string(),
  }),
});

export const collections = { blog, client };
