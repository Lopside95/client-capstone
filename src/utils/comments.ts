import axios from "axios";
import { PostSchema, UserSchema } from "./types/schemas";
import { User } from "./types/posts";

export const baseUrl = import.meta.env.VITE_API_URL;

const getComments = async (postId: string) => {
  try {
    const res = await axios.get(`${baseUrl}/posts/${postId}/comments`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export { getComments };
