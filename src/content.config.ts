import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string(),
  }),
});

const projects = defineCollection({
  // Load Markdown and MDX files in the `src/content/projects/` directory.
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    stack: z.string(),
    // Transform string to Date object
    order: z.number(),
    images: z.array(z.string()),
  }),
});

export const collections = { blog, projects };
