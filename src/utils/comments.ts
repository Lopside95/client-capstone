import axios from "axios";
import { CommentSchema } from "./types/schemas";

export const baseUrl = import.meta.env.VITE_API_URL;

const getComments = async (postId: string) => {
  try {
    const res = await axios.get(`${baseUrl}/posts/${postId}/comments`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const postComment = async (comment: CommentSchema) => {
  const authToken = localStorage.getItem("authToken");

  console.log("authToekn", authToken);

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
};

export { getComments, postComment };
