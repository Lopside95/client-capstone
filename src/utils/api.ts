import axios from "axios";
import {
  LoginSchema,
  PostSchema,
  UpdateUserSchema,
  UserSchema,
} from "./types/schemas";
import { User } from "./types/posts";
import { toaster } from "evergreen-ui";
import { useNavigate } from "react-router";

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
    const res = await axios.post(`${baseUrl}/users/signup`, user);

    if (res.status === 201) {
      toaster.success("Sign up successful!");
    }

    return res;
  } catch (error) {
    console.error(error);
  }
};

const login = async (loginData: LoginSchema) => {
  try {
    const res = await axios.post(`${baseUrl}/users/login`, loginData);
    const data = res.data;

    localStorage.setItem("authToken", data.authToken);
    if (res.status === 200) {
      toaster.success("Logged in!");
    }
  } catch (error) {
    console.error("error in login", error);
  }
};

const getAuthedUser = async () => {
  const authToken = localStorage.getItem("authToken");

  try {
    const res = await axios.get(`${baseUrl}/users/account`, {
      headers: {
        authorisation: `Bearer ${authToken}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log("There was an error in get authed user", error);
    console.error(error);
  }
};

const updateUser = async (updateData: UpdateUserSchema) => {
  const res = await axios.put(`${baseUrl}/users/account`, updateData);
};

const deleteUser = async (email: string) => {
  try {
    const res = await axios.delete(`${baseUrl}/users/account`, {
      data: { email },
    });
    localStorage.removeItem("authToken");

    if (res.status === 200) {
      toaster.success("User deleted!");
    }

    return res;
  } catch (error) {
    console.error(error);
  }
};

export {
  getTags,
  getHome,
  createUser,
  getUserById,
  getUsers,
  login,
  getAuthedUser,
  updateUser,
  deleteUser,
};
