import z from "zod";

export const tag = z.object({
  id: z.string(),
  name: z.string(),
  // active: z.boolean(),
});
// export const tag = z.object({
//   id: z.string(),
//   name: z.string(),
// });

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  img: z.string().optional(),
  description: z.string(),
  urgency: z.number(),
  type: z.enum(["General", "Report"]),
  status: z.enum(["Open", "Closed"]),
  tags: z.array(tag),
  longitude: z.number().optional(),
  latitude: z.number().optional(),
  created_at: z.date(),
  updated_at: z.date(),
});

export const userSchema = z.object({
  id: z.string(),
  firstName: z.string().min(1),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  active: z.boolean(),
  posts: z.array(postSchema),
  created_at: z.date(),
  updated_at: z.date(),
});

export type Post = z.infer<typeof postSchema>;
export type Tag = z.infer<typeof tag>;
export type User = z.infer<typeof userSchema>;
