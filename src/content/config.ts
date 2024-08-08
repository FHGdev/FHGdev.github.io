import { defineCollection, z } from 'astro:content';

const post = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		heroThumb: z.string().optional(),
		imgalt: z.string().optional(),
		status: z.string().optional(),
		author: z.string().optional(),
	}),
});
const teamlist_management = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		sort: z.number(),
		seo_title: z.string(),
		seo_description: z.string(),
		heroImage: z.string().optional(),
		imgalt: z.string().optional(),
		position: z.string().optional(),
		teamname: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		status: z.string().optional(),
	}),
});
const teamlist_bod = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		sort: z.number(),
		seo_title: z.string(),
		seo_description: z.string(),
		heroImage: z.string().optional(),
		imgalt: z.string().optional(),
		position: z.string().optional(),
		teamname: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		status: z.string().optional(),
	}),
});

export const collections = {
	'post': post,
	'teamlist_management': teamlist_management,
	'teamlist_bod': teamlist_bod
  };