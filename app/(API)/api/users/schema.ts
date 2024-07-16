import { z } from "zod";

const UsernameSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
});

const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
});

export { UsernameSchema, productSchema };
