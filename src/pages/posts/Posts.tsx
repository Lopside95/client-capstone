import { useEffect, useState } from "react";
import { Post, UserComment } from "../../utils/types/posts";
import "./Posts.scss";
import Card from "../../components/Card/Card";
import { getPostById } from "../../utils/posts";
import { useParams } from "react-router";
import AddComment from "../../components/AddComment/AddComment";

const Posts = () => {
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<UserComment[] | null>(null);

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
    <main className="main posts">
      <h1>Welcome to the page</h1>

      <Card {...post} />
      {/* {comments ? <p>{comments[0].content}</p> : <p>Waiting</p>} */}
      <AddComment />
    </main>
  );
};

export default Posts;
