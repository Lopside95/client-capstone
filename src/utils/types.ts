export type Post = {
  id: number;
  title: string;
  longitude: number;
  latitude: number;
  img: string;
  description: string;
  urgency: number;
  type: PostType;
  status: PostStatus;
  created_at: Date;
  updated_at: Date;
};

export enum PostType {
  "GENERAL",
  "REPORT",
}

export enum PostStatus {
  "OPEN",
  "CLOSED",
}
