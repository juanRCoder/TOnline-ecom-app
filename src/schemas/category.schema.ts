import { z } from "zod";

export const schemaCategoryForm = z.object({
  name: z.string().min(1, "Nombre de categoria obligatoria!"),
});

export type TypeCategoryForm = z.infer<typeof schemaCategoryForm>;
