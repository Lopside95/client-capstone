import axios from "axios";
import { CommentSchema, PostSchema, UserSchema } from "./types/schemas";
import { User, UserComment } from "./types/posts";

export const baseUrl = import.meta.env.VITE_API_URL;

const getComments = async (postId: string) => {
  try {
    const res = await axios.get(`${baseUrl}/posts/${postId}/comments`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const postComment = async (
  // postId: string,
  comment: CommentSchema
  // content: string
  // authToken: string
) => {
  const authToken = localStorage.getItem("authToken");

  console.log("authToekn", authToken);

  // const res = await axios.post(`${baseUrl}/users/login`, loginData);

  try {
    const res = await axios.post(
      `${baseUrl}/posts/${comment.post_id}/comments`,
      comment
    );

    return res.data;
  } catch (error) {
    console.log("There was an error in get authed user", error);
    console.error(error);
  }

  // try {
  //   const { data } = await axios.post(
  //     `${baseUrl}/posts/${postId}/comments`,
  //     comment
  //   );

  //   console.log(";potsruibfksd", data);

  //   // const res = await axios.post(`${baseUrl}/users/login`, loginData);
  //   // const data = res.data
  //   localStorage.getItem("authToken");
  //   // localStorage.setItem("authToken", authToken);
  //   // localStorage.setItem("authToken", data.authToken);

  //   console.log("data in login", data);
  //   // return res;
  // } catch (error) {
  //   console.error(error);
  // }
};

export { getComments, postComment };
