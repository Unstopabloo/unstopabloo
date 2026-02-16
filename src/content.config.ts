import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string().url().optional(),
    linkToDetail: z.boolean().default(false),
    image: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    pubDate: z.coerce.date(),
    readTime: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
