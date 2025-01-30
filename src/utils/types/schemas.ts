import z from "zod";

const tag = z.object({
  name: z.string(),
  id: z.number(),
});

const postSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(40, { message: "Must be less than 40 characters" }),
  img: z.string().optional(),
  description: z.string().min(1, { message: "Description is required" }),
  urgency: z.number().min(1),
  type: z.enum(["LOST", "FOUND", "SIGHTING"]),
  status: z.enum(["OPEN", "CLOSED"]),
  tags: z.array(tag),
  longitude: z.number().optional(),
  latitude: z.number().optional(),
  userId: z.string().optional(),
});

const userSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().trim().email().toLowerCase(),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
  active: z.boolean().optional(),
});

const updateUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().trim().email().toLowerCase().optional(),
  password: z.string(),
  newPassword: z.string().optional(),
  active: z.boolean().default(true),
});

const loginSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
});

const commentSchema = z.object({
  content: z.string(),
  post_id: z.string().optional(),
});

const tagSchema = z.object({ name: z.string() });

const deletePostShchema = z.object({
  id: z.string(),
  userId: z.string().optional(),
});

export type PostSchema = z.infer<typeof postSchema>;
export type DeletePostSchema = z.infer<typeof deletePostShchema>;
export type Tag = z.infer<typeof tag>;
export type UserSchema = z.infer<typeof userSchema>;
export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;
export type CommentSchema = z.infer<typeof commentSchema>;
export type TagSchema = z.infer<typeof tagSchema>;

export {
  commentSchema,
  userSchema,
  loginSchema,
  tagSchema,
  postSchema,
  updateUserSchema,
  deletePostShchema,
};
