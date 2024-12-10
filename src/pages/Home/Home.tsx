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

  // const filteredPosts = posts?.filter((post) => {
  //   if (selectedTags) {
  //     return post.tags.includes(selectedTags);
  //   } else {
  //     return ;
  //   }
  // });

  // const renderedPosts = posts?.map((post, index) => {
  //   if (post.tags[0].name === selectedTags?.name) {
  //     return
  //   }
  // })

  // const renderedPosts = () => {
  //   posts?.filter((post) => {
  //     if (posts.tags)

  //     });
  // };

  // const filteredPosts = posts?.map((post) => {
  //   if (post.tags.name === selectedTags.name) {
  //     return post
  //   }
  // })

  // const filteredPosts = posts?.filter((post) => {
  //   post.tags?.forEach((tag) => {
  //     if (tagNames.includes(tag.name)) {
  //       return post;
  //     }
  //   });
  // });

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
        <MyButton onClick={() => setFilterIsShown(!filterIsShown)}>
          Show Filters
        </MyButton>
        <article className="filters">
          {/* <Label
          className="create__tags-label"
          marginBottom="0.2rem"
          htmlFor="tags"
        >
          Tags
        </Label> */}
          {/* <Select
            isMulti
            options={tagOptions}
            className="create__tags-select"
            classNamePrefix="select"
            {...form.register("tags")}
            onChange={(selectedOptions) => {
              const selectedTags = selectedOptions.map((option) => ({
                name: option.label,
                id: option.value,
              }));
              console.log(selectedTags);
              form.setValue("tags", selectedTags);
            }}
          /> */}
        </article>
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

{
  /* <SelectMenu
            title="Select name"
            options={
              allTags &&
              allTags.map((tag) => ({ label: tag.name, value: String(tag.id) })) // Ensure value is a string
            }
            selected={selectedTags} // string[] | undefined
            onSelect={(item) =>
              setSelectedTags(
                (prev) =>
                  prev ? [...prev, String(item.value)] : [String(item.value)] // Cast value to string
              )
            }
          >
            <Pill>{selectedTags?.join(", ") || "Select tags"}</Pill>
          </SelectMenu> */
}
{
  /* <SelectMenu
            title="Select name"
            options={
              allTags &&
              allTags.map((tag) => ({ label: tag.name, value: tag.id }))
            }
            selected={selectedTags} // string[] | undefined
            onSelect={(item) =>
              setSelectedTags((prev) =>
                prev ? [...prev, item.value] : [item.value]
              )
            }
          >
            <Pill>{selectedTags?.join(", ") || "Select tags"}</Pill>
          </SelectMenu> */
}
{
  /* <SelectMenu
            title="Select name"
            options={
              allTags &&
              allTags.map((tag) => ({ label: tag.name, value: tag.id }))
            }
            selected={selectedTags}
            onSelect={(tag) => setSelectedTags({...selectedTags, tag})}
          >
            <Pill>{}</Pill>
          </SelectMenu> */
}
{
  /* {allTags?.map((tag) => (
            <Pill
              onClick={() => {
                setSelectedTags(tag);
                console.log(selectedTags);
              }}
              key={tag.id}
            >
              {tag.name}
            </Pill>
          ))} */
}
