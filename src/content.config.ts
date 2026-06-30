import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			tags: z.array(z.string()).default([]),
			keywords: z.array(z.string()).default([]),
			affiliate_cta: z
				.object({
					title: z.string(),
					description: z.string(),
					buttonText: z.string(),
					url: z.string().url(),
				})
				.optional(),
		}),
});

export const collections = { blog };