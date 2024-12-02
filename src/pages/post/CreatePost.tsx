import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { createPost, getTags } from "../../utils/api";
import { z } from "zod";
import TagButton from "../../components/ui/Tag/Tag";
import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { PostSchema, postSchema, TagSchema } from "../../utils/types/schemas";

const CreatePost = () => {
  const [allTags, setAllTags] = useState<TagSchema[]>();

  // const [selectedTags, setSelectedTags] = useState<Tag[]>();
  const fetchData = async () => {
    try {
      const res = await getTags();

      setAllTags(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const form = useForm<PostSchema>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      tags: [],
      status: "Open",
      type: "General",
      urgency: 3,
      description: "Dog here",
    },
  });

  const onSubmit: SubmitHandler<PostSchema> = async (data: PostSchema) => {
    try {
      console.log("datat", data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTagChange = (e: Event) => {
    e.preventDefault();
  };

  const handleSelectChange = () => {};

  const tagOptions = allTags?.map((tag) => ({
    label: tag.name,
    value: tag.name,
  }));

  const { register } = form;

  useEffect(() => {
    console.log("Form Errors:", form.formState.errors);
  }, [form.formState]);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Input label="Title" name="title" />

        <Select
          isMulti
          options={tagOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          {...register("tags")}
          onChange={(selectedOptions) => {
            const selectedTags = selectedOptions.map((option) => ({
              name: option.value,
            }));
            form.setValue("tags", selectedTags);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
