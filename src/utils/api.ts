import axios from "axios";
import { LoginSchema, PostSchema, UserSchema } from "./types/schemas";
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
    const res = await axios.post(`${baseUrl}/users/signup`, user);
    return res;
  } catch (error) {
    console.error(error);
  }
};

// const { data } = await axios.post(
//   `${import.meta.env.VITE_API_BASE_URL}/users/login`,
//   {
//     email: formData.email,
//     password: formData.password,
//   }
// );

// localStorage.setItem("authToken", data.authToken);

const login = async (loginData: LoginSchema) => {
  try {
    const res = await axios.post(`${baseUrl}/users/login`, loginData);
    const data = res.data;
    console.log("data in login", data);
    localStorage.setItem("authToken", data.authToken);
  } catch (error) {
    console.error(error);
  }
};

const getAuthedUser = async () => {
  const authToken = localStorage.getItem("authToken");

  console.log(authToken);

  try {
    const res = await axios.get(`${baseUrl}/users/account`, {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log("There was an error in get authed user", error);
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
};

// try {
//   const { data } = await axios.get(
//     `${import.meta.env.VITE_API_BASE_URL}/users/profile`,
//     {
//       headers: {
//         authorisation: `Bearer ${authToken}`,
//       },
//     }
//   );

//   setUserData(data);
//   setIsLoading(false);
// } catch (error) {
//   if (error.status === 401) {
//     setError("You must be logged in to view this page");
//     setIsLoading(false);
//   }
// }
// };
