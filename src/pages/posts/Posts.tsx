import { useEffect, useState } from "react";
import { Post, UserComment } from "../../utils/types/posts";
import "./Posts.scss";
import Input from "../../components/ui/Input/Input";
import Card from "../../components/Card/Card";
import { Pill } from "evergreen-ui";
import type { PillProps } from "evergreen-ui";
import { getPostById, getPosts } from "../../utils/posts";
import { useParams } from "react-router";
import { getComments } from "../../utils/comments";

const Posts = () => {
  const [post, setPost] = useState<Post>();
  // const [comments, setComments] = useState<UserComment[] | null>(null);

  const { id } = useParams();

  const fetchPost = async () => {
    try {
      const postsData = await getPostById(id!);

      setPost(postsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!post) {
    return <div>Loading</div>;
  }

  return (
    <main className="main">
      <h1>Welcome to the page</h1>

      <Card {...post} />
      {/* {comments ? <p>{comments[0].content}</p> : <p>Waiting</p>} */}
      {/* {comments ? <p>{comments[0].content}</p> : <p>Waiting</p>} */}
      {/* <section className="posts">
        {posts?.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </section> */}
    </main>
  );
};

export default Posts;
