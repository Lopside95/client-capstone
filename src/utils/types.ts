import z from "zod";

const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  img: z.string().optional(),
  description: z.string(),
  urgency: z.number(),
  type: z.enum(["General", "Report"]),
  status: z.enum(["Open", "Closed"]),
  created_at: z.date(),
  updated_at: z.date(),
});

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

export enum PostType {
  "GENERAL",
  "REPORT",
}

export enum PostStatus {
  "OPEN",
  "CLOSED",
}
