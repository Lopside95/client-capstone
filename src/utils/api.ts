import axios from "axios";

export const baseUrl = import.meta.env.VITE_API_URL;

const getPosts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export { getPosts };
