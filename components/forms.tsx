import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { type ReactNode } from "react";

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

/**
 * Context
 */

export const FormProviderCreateCourse = ({
  children,
}: {
  children: ReactNode;
}) => {
  const methods = useFormCreateCourse();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

export const useFormContextCreateCourse = () => {
  useFormContext<FormTypeCreateCourse>();
};
