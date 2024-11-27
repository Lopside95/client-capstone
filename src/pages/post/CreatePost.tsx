import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post, postSchema, Tag } from "../../utils/types/posts";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { createPost } from "../../utils/api";
import { z } from "zod";
import TagButton from "../../components/ui/Tag/Tag";

const CreatePost = () => {
  const tagItems: Tag[] = [
    { name: "Mange", active: false },
    { name: "Hunger", active: false },
    { name: "Aggressive", active: false },
  ];

  const form = useForm<Post>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      tags: tagItems,
    },
  });

  const onSubmit: SubmitHandler<Post> = async (data: Post) => {
    try {
      console.log("datat", data);
      console.log("Hellloloo");
    } catch (error) {
      console.error(error);
    }
  };

  const allTags = form.watch("tags");

  console.log("alltags", allTags);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input type="text" {...form.register("title")} />
        {tagItems.map((tag, index) => (
          <button
            onClick={() => form.setValue(`tags.${index}.active`, !tag.active)}
          >
            {tag.name}
          </button>
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
