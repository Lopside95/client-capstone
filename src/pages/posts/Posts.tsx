import { useEffect, useState } from "react";
import { Post } from "../../utils/types/zod";
import { getPosts } from "../../utils/api";
import "./Posts.scss";
import { Input } from "../../components/ui/Input";
import Button from "@ui/Button";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>();

  const fetchPosts = async () => {
    const postsData = await getPosts();
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <main className="main">
      <h1>Welcome to the page</h1>
      <section className="posts">
        {posts?.map((post) => (
          <article className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p className="post__description">{post.description}</p>
            <p className="post__status">{post.status}</p>
          </article>
        ))}
      </section>
      <Button />
      <Input label="Title" name="title" placeholder="Title" />
    </main>
  );
};

export default Posts;
