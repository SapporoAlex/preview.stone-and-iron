// Content collections. To add an event, create a new .md file in
// src/content/events/ with the frontmatter fields below. It appears on
// /event/ and gets its own page at /event/<file-name>/ automatically.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string(), // path under /public, e.g. /images/events/xxx.jpg
  }),
});

export const collections = { events };
