import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        image: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()),
        faqs: z
          .array(
            z.object({
              question: z.string(),
              answer: z.string(),
            }),
          )
          .optional(),
      }),
    }),
  },
});
