import { useNavigate } from "react-router";
// import Button from "../../components/ui/Button/Button";
import "./Home.scss";
import { useEffect, useState } from "react";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { Button, Label, Pill, SelectMenu } from "evergreen-ui";
import { getPosts } from "../../utils/posts";
import { Post, Tag, UserComment } from "../../utils/types/posts";
import Card from "../../components/Card/Card";
import Select from "react-select";
import {
  postSchema,
  PostSchema,
  tag,
  TagSchema,
} from "../../utils/types/schemas";
import { getTags } from "../../utils/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getComments } from "../../utils/comments";
import MyButton from "../../components/ui/Button/Button";
import MyPill from "../../components/ui/Pill/MyPill";
// import "../../components/ui/PrimaryButton/PrimaryButton.scss";

const Home = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>();
  const [allTags, setAllTags] = useState<TagSchema[]>();
  const [selectedTags, setSelectedTags] = useState<TagSchema[]>();
  const [tagNames, setTagNames] = useState<string[]>();
  const [comments, setComments] = useState<UserComment[]>();
  // const [selectedTags, setSelectedTags] = useState<string[] | undefined>();
  const [filterIsShown, setFilterIsShown] = useState<boolean>(false);

  const fetchData = async () => {
    const postsData = await getPosts();
    const res = await getTags();
    setPosts(postsData);
    setAllTags(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tagOptions = allTags?.map((tag) => ({
    label: tag.name,
    value: tag.id,
  }));

  return (
    <div className="home">
      <main className="home__main">
        <section className="landing">
          <h1 className="landing__text">
            We help people find lost dogs and help stray dogs find homes
          </h1>
          <img src="/cover_2.svg" className="landing__image" />
        </section>
        <section className="subnav">
          <PrimaryButton
            className="subnav__button"
            onClick={() => navigate("/posts/create-post")}
          >
            Report
          </PrimaryButton>
          <PrimaryButton className="subnav__button">Find</PrimaryButton>
        </section>
        {/* <Label
        className="create__tags-label"
        marginBottom="0.2rem"
        htmlFor="tags"
      >
        Tags
      </Label> */}

        <Select
          isMulti
          options={tagOptions}
          className="create__tags-select"
          classNamePrefix="select"
          onChange={(selectedOptions) => {
            const filterTags = selectedOptions.map((option) => ({
              name: option.label,
              id: option.value,
            }));
            console.log(filterTags);
            setSelectedTags(filterTags);
          }}
        />
        {/* <article className="filters">
          <MyButton onClick={() => setFilterIsShown(!filterIsShown)}>
            Show Filters
          </MyButton>
        </article> */}
        <section className="posts">
          {posts?.map((post) => (
            <Card key={post.id} {...post} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;

export const primary = "#76bd6b";
export const secondary = "#efeded";
