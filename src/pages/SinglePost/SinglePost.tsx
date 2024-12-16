import { useEffect, useState } from "react";
import { Post, UserComment } from "../../utils/types/posts";
import "./SinglePost.scss";
import Card from "../../components/Card/Card";
import { getPostById } from "../../utils/posts";
import { useParams } from "react-router";
import AddComment from "../../components/AddComment/AddComment";

const SinglePost = () => {
  const [post, setPost] = useState<Post>();
  const [comments, setComments] = useState<UserComment[] | null>(null);

  const { id } = useParams();

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

  if (!post) {
    return <div>Loading</div>;
  }

  return (
    <main className="main posts">
      <section className="post">
        <Card {...post} />
      </section>
      <AddComment />
    </main>
  );
};

export default SinglePost;
