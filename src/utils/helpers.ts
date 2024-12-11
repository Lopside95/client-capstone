import { User } from "./types/posts";

//eslint-disable-next-line
const convertUserData = (data: any) => {
  const userData: User = {
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
  return userData;
};
