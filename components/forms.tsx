import { zodResolver } from "@hookform/resolvers/zod";
import exp from "constants";
import { useForm } from "react-hook-form";
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

/**
 * Hooks
 */

export type FormTypeCreateCourse = z.infer<typeof schemaCreateCourse>;

export const useFormCreateCourse = () =>
  useForm<FormTypeCreateCourse>({
    resolver: zodResolver(schemaCreateCourse),
  });
