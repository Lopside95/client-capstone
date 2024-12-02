import axios from "axios";
import { PostSchema } from "./types/schemas";

export const baseUrl = import.meta.env.VITE_API_URL;

const getPosts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const createPost = async (post: PostSchema) => {
  try {
    const res = await axios.post(`${baseUrl}/`, post);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getTags = async () => {
  try {
    const res = await axios.get(`${baseUrl}/tags`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export { getPosts, createPost, getTags };
