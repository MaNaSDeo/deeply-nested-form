import { z } from "zod";

/**
 * Schemas
 */

export const schemaNote = z.object({
  content: z.string(),
});

export const schemaChapter = z.object({
  title: z.string(),
  notes: z.array(schemaNote),
});

export const schemaCreateCourse = z.object({
  title: z.string(),
  chapters: z.array(schemaChapter),
});
