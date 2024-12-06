import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { z } from "zod";
import TagButton from "../../components/ui/Tag/TagButton";
import { useEffect, useState } from "react";
import Select from "react-select";
import { PostSchema, postSchema, TagSchema } from "../../utils/types/schemas";
import "./CreatePost.scss";
import { FileUploader, TextInput, TextInputField } from "evergreen-ui";
import { getTags } from "../../utils/api";
import { createPost } from "../../utils/posts";

const CreatePost = () => {
  const [allTags, setAllTags] = useState<TagSchema[]>();

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
      title: "Test Title",
      tags: [],
      status: "Open",
      type: "Lost",
      img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
      urgency: 3,
      longitude: 335607.8,
      latitude: 1842144,
      description: "Dog here",
    },
  });

  const onSubmit: SubmitHandler<PostSchema> = async (data: PostSchema) => {
    try {
      console.log("datat", data);
      const res = await createPost(data);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const tagOptions = allTags?.map((tag) => ({
    label: tag.name,
    value: tag.id,
  }));

  useEffect(() => {
    console.log("Form Errors:", form.formState.errors);
  }, [form.formState]);

  const { register } = form;

  // useEffect(() => {
  //   console.log("Form Errors:", form.formState.errors);
  // }, [form.formState]);

  return (
    <FormProvider {...form}>
      <form className="create main" onSubmit={form.handleSubmit(onSubmit)}>
        {/* <TextInputField
          label="Title"
          {...form.register("title")}
          border="none"
        /> */}
        <Input label="Title" name="title" />
        <Input label="Description" name="description" />
        {/* <TextInput name="description" /> */}
        <Select
          isMulti
          options={tagOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          {...register("tags")}
          onChange={(selectedOptions) => {
            const selectedTags = selectedOptions.map((option) => ({
              name: option.label,
              id: option.value,
            }));
            console.log(selectedTags);
            form.setValue("tags", selectedTags);
          }}
        />
        <FileUploader />

        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
