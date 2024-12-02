import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post, postSchema, tag, Tag } from "../../utils/types/posts";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { createPost, getTags } from "../../utils/api";
import { z } from "zod";
import TagButton from "../../components/ui/Tag/Tag";
import { useEffect, useState } from "react";

const CreatePost = () => {
  const [allTags, setAllTags] = useState<Tag[]>();

  // const [selectedTags, setSelectedTags] = useState<Tag[]>();
  const fetchData = async () => {
    try {
      const res = await getTags();

      setAllTags(res);
    } catch (error) {
      console.error(error);
    }
  };

  const newTags: Tag[] = [];

  useEffect(() => {
    fetchData();
  }, []);

  const form = useForm<Post>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      tags: [],
    },
  });

  const onSubmit: SubmitHandler<Post> = async (data: Post) => {
    try {
      console.log("datat", data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTagChange = (e: Event) => {
    e.preventDefault();
  };

  const tagVals = form.watch("tags");

  console.log(newTags);

  // console.log(form.getValues("tags"));

  console.log("tagVal", tagVals);
  // console.log("allTags", allTags);

  const { register } = form;

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Input label="Title" name="title" />
        {/* <label htmlFor="tags" className="form_label">
          Select function
        </label> */}
        <select>
          {allTags?.map((tag) => {
            return (
              <option key={tag.name} value={tag.name}>
                {tag.name}
              </option>
            );
          })}

          {/* {tags?.map((tag) => {
            return <p key={tag.id}>{tag.name}</p>;
          })} */}
        </select>

        {/* <select {...form.register("tags")}>
          {tags?.map((tag) => {
            return (
              <option key={tag.id} value={tag.name}>
                {tag.name}
              </option>
            );
          })}
        </select> */}

        {/* {tags?.map((tag) => {
          return (
            <button {...form.register("tags")} key={tag.id}>
              {tag.name}
            </button>
          );
        })} */}
        {/* {tagItems.map((tag, index) => (
          <button
            onClick={() => form.setValue(`tags.${index}.active`, !tag.active)}
          >
            {tag.name}
          </button>
        ))} */}

        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
