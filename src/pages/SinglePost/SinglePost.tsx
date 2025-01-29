import { useEffect, useState } from "react";
import { Post, User } from "../../utils/types/posts";
import "./SinglePost.scss";
import Card from "../../components/Card/Card";
import { getPostById } from "../../utils/posts";
import { useNavigate, useParams } from "react-router";
import AddComment from "../../components/AddComment/AddComment";
import axios from "axios";
import { baseUrl } from "../../utils/api";
import { primary } from "../Home/Home";
import { Spinner, toaster } from "evergreen-ui";
import MyDialog from "../../components/Dialog/MyDialog";
import MyButton from "../../components/ui/Button/Button";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { set } from "react-hook-form";

const SinglePost = () => {
  const [post, setPost] = useState<Post>();
  const [dialogIsShown, setDialogIsShown] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const authToken = localStorage.getItem("authToken");
  const [postLoading, setPostLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const { id } = useParams();

  const fetchUser = async () => {
    if (!authToken) {
      return;
    }

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

  const fetchPost = async () => {
    try {
      const postsData = await getPostById(id!);

      setPost(postsData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchPost();
    window.scrollTo({ top: 0 });
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

  setTimeout(() => {
    setPostLoading(false);
  }, 500);

  if (!post && !postLoading) {
    return <NotFoundPage content="Couldn't find that post" />;
  }

  return (
    <main className="main posts">
      <section className="post post-single">
        {postLoading ? (
          <Spinner size={50} alignSelf={"center"} margin="auto" />
        ) : (
          post && <Card {...post} />
        )}
      </section>
      {post?.user_id === user?.id && (
        <>
          <MyDialog
            handleDelete={handleDelete}
            dialogIsShown={dialogIsShown}
            setDialogIsShown={setDialogIsShown}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            item="Post"
          />
          {!postLoading && (
            <MyButton
              onClick={(e) => {
                e.preventDefault();
                setDialogIsShown(true);
              }}
              backColor={primary}
              buttonWidth={"9.375rem"}
            >
              Delete Post
            </MyButton>
          )}
        </>
      )}
      <AddComment />
    </main>
  );
};

export default SinglePost;
