import z from "zod";

export const tag = z.object({
  name: z.string(),
  active: z.boolean(),
});

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

export type Tag = z.infer<typeof tag>;
export type Post = z.infer<typeof postSchema>;

// export type Post = {
//   id: number;
//   title: string;
//   longitude: number;
//   latitude: number;
//   img: string;
//   description: string;
//   urgency: number;
//   type: PostType;
//   status: PostStatus;
//   created_at: Date;
//   updated_at: Date;
// };
