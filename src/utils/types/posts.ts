import { PostStatus, PostType } from "./enums";

export type Tag = {
  id: string;
  name: string;
};

export interface PostInterface {
  post?: Post;
}

export type Post = {
  id: string;
  title: string;
  img?: string;
  description: string;
  urgency: number;
  type: PostType;
  status: PostStatus;
  tags: Tag[];
  comments: UserComment[];
  longitude?: number;
  latitude?: number;
  created_at: Date;
  updated_at: Date;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  active: boolean;
  posts: Post[];
  created_at: Date;
  updated_at: Date;
};

export type UserComment = {
  id: string;
  content: string;
  postId: string;
  userId: string | undefined;
  created_at: Date;
  updated_at: Date;
};
