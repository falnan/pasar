import { z } from "zod";

export const productValidation = z.object({
  title: z.string().min(1, "perlu diisi"),
  slug: z.string().min(1, "perlu diisi"),
  category: z.string().min(1, "perlu diisi"),
  description: z.string().min(1, "perlu diisi"),
  image: z.string().min(1, "perlu diisi"),
  normalPrice: z.number().min(1, "perlu diisi"),
  dealPrice: z.number().min(1, "perlu diisi"),
  unit: z.enum(["kg", "buah"]),
  stock: z.number().min(1, "perlu diisi"),
});

export const userValidation = z.object({
  username: z.string().min(1, "perlu diisi"),
  email: z.string().email("perlu diisi"),
  name: z.string().min(1, "perlu diisi"),
  birthday: z.date().optional(),
  gender: z.string().optional(),
  adress1: z.string().optional(),
  adress2: z.string().optional(),
  adress3: z.string().optional(),
});
