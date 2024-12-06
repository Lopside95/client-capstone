import z from "zod";

export const tag = z.object({
  name: z.string(),
  id: z.number(),
});

export const postSchema = z.object({
  // title: z.string().min(5),
  title: z.string().min(1, { message: "Title is required" }),
  img: z.string().optional(),
  description: z.string().min(1, { message: "Description is required" }),
  urgency: z.number().min(1),
  type: z.enum(["LOST", "FOUND", "SIGHTING"]),
  status: z.enum(["OPEN", "CLOSED"]),
  tags: z.array(tag),
  longitude: z.number().optional(),
  latitude: z.number().optional(),
});

export const userSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  active: z.boolean().optional(),
  // posts: z.array(postSchema),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const commentSchema = z.object({
  content: z.string(),
  post_id: z.string(),
  user_id: z.string().optional(),
  // post: postSchema,
  // user: userSchema,
});

export type PostSchema = z.infer<typeof postSchema>;
export type TagSchema = z.infer<typeof tag>;
export type UserSchema = z.infer<typeof userSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type CommentSchema = z.infer<typeof commentSchema>;
