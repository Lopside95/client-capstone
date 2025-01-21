import { useEffect, useState } from "react";
import { Post, User, UserComment } from "../../utils/types/posts";
import "./SinglePost.scss";
import Card from "../../components/Card/Card";
import { getPostById } from "../../utils/posts";
import { useNavigate, useParams } from "react-router";
import AddComment from "../../components/AddComment/AddComment";
import axios from "axios";
import { baseUrl } from "../../utils/api";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { primary } from "../Home/Home";
import { toaster } from "evergreen-ui";
import NotFound from "../../components/NotFound/NotFound";

const SinglePost = () => {
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<UserComment[] | null>(null);

  const [user, setUser] = useState<User>();
  const authToken = localStorage.getItem("authToken");

  const navigate = useNavigate();

  const { id } = useParams();

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/users/account`, {
        headers: {
          authorisation: `Bearer ${authToken}`,
        },
      });

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

      setUser(userData);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchPost = async () => {
    try {
      const postsData = await getPostById(id!);

      setPost(postsData);
      setComments(postsData.comments);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${baseUrl}/posts/${id}`, {
        headers: {
          authorisation: `Bearer ${authToken}`,
        },
      });

      if (res.status === 200) {
        toaster.success("Post deleted!");
      }
      navigate("/");

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) {
    return <NotFound content="Couldn't find that post" />;
  }

  return (
    <main className="main posts">
      <section className="post">
        <Card {...post} />
      </section>
      {post.user_id === user?.id && (
        <PrimaryButton
          backColor={primary}
          buttonWidth={"9.375rem"}
          className="primary__button primary__button-next"
          onClick={handleDelete}
        >
          Delete post
        </PrimaryButton>
      )}
      <AddComment />
    </main>
  );
};

export default SinglePost;
