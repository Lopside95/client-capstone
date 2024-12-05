import { useEffect, useState } from "react";
import { Post } from "../../utils/types/posts";
import "./Posts.scss";
import Input from "../ui/Input/Input";
import Card from "../Card/Card";
import { Pill } from "evergreen-ui";
import type { PillProps } from "evergreen-ui";
import { getPosts } from "../../utils/posts";

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
          <Card key={post.id} {...post} />
        ))}
      </section>
    </main>
  );
};

export default Posts;
