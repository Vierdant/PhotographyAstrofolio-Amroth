import { z as zod, defineCollection } from "astro:content";

const projectCollection = defineCollection({ 
    type: 'content',
    schema: zod.object({
        title: zod.string(),
        id: zod.string(),
        thumbnail: zod.string(),
        tags: zod.array(zod.string()),
    })
});

export const collections = {
  'project': projectCollection,
};