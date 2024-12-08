import {
  FieldError,
  FormProvider,
  SubmitHandler,
  useForm,
  FieldValues,
  FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { z } from "zod";
import TagButton from "../../components/ui/Tag/TagButton";
import { useEffect, useState } from "react";
import Select from "react-select";
import { PostSchema, postSchema, TagSchema } from "../../utils/types/schemas";
import "./CreatePost.scss";
import { FileUploader, Label, TextInput, TextInputField } from "evergreen-ui";
import { getTags } from "../../utils/api";
import { createPost } from "../../utils/posts";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { primary, secondary } from "../Home/Home";

const CreatePost = () => {
  const [allTags, setAllTags] = useState<TagSchema[]>();
  // const [errors, setErrors] = useState<FieldError | undefined>();
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
      status: "OPEN",
      type: "LOST",
      img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
      urgency: 3,
      longitude: 335607.8,
      latitude: 1842144,
      // title: "Test Title",
      // tags: [],
      // status: "OPEN",
      // type: "LOST",
      // img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
      // urgency: 3,
      // longitude: 335607.8,
      // latitude: 1842144,
      // description: "Dog here",
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
    // console.log("Form Errors:", form.formState.errors);
  }, [form.formState]);

  const { register, watch, formState } = form;

  // const all = watch();
  const [formErrors, setFormErrors] = useState<FieldErrors<FieldValues>>();

  useEffect(() => {
    if (formState.errors) {
      setFormErrors(formState.errors);
    }
  }, [formState]);

  return (
    <FormProvider {...form}>
      <form className="create main" onSubmit={form.handleSubmit(onSubmit)}>
        <Input label="Title" name="title" />
        <Input label="Description" name="description" />
        <Label
          className="create__tags-label"
          marginBottom="0.2rem"
          htmlFor="tags"
        >
          Tags
        </Label>
        <Select
          isMulti
          options={tagOptions}
          className="create__tags-select"
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
        <FileUploader width={"90vw"} />

        <PrimaryButton
          backColor={primary}
          buttonWidth={"9.375rem"}
          className="primary__button primary__button-next"
        >
          Done
        </PrimaryButton>
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </FormProvider>
  );
};

export default CreatePost;
