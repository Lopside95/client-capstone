import z from "zod";

export const tag = z.object({
  name: z.string(),
  id: z.number(),
});

export const postSchema = z.object({
  title: z.string(),
  img: z.string().optional(),
  description: z.string(),
  urgency: z.number(),
  type: z.enum(["General", "Report"]),
  status: z.enum(["Open", "Closed"]),
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

export const commentSchema = z.object({
  content: z.string(),
  post_id: z.string(),
  user_id: z.string().optional(),
  // post: postSchema,
  // user: userSchema,
});

export type CommentSchema = z.infer<typeof commentSchema>;

export type PostSchema = z.infer<typeof postSchema>;
export type TagSchema = z.infer<typeof tag>;
export type UserSchema = z.infer<typeof userSchema>;
