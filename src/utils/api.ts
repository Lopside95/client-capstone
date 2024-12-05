import axios from "axios";
import { PostSchema, UserSchema } from "./types/schemas";
import { User } from "./types/posts";

export const baseUrl = import.meta.env.VITE_API_URL;

const getHome = async () => {
  try {
    const res = await axios.get(`${baseUrl}/`);
    return res.data;
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

const getUsers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/users`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
const getUserById = async (userId?: string) => {
  try {
    const res = await axios.get(`${baseUrl}/users/${userId}`);
    const data = res.data;

    const user: User = {
      id: data.id,
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      password: data.password,
      active: data.active,
      posts: data.posts,
      created_at: data.created_at,
      updated_at: data.updated_at,
    };

    return user;
  } catch (error) {
    console.error(error);
  }
};
const createUser = async (user: UserSchema) => {
  try {
    const res = await axios.post(`${baseUrl}/users`, user);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export { getTags, getHome, createUser, getUserById, getUsers };
