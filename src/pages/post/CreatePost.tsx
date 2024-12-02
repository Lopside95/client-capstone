import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post, postSchema, tag, Tag } from "../../utils/types/posts";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";
import { createPost, getTags } from "../../utils/api";
import { z } from "zod";
import TagButton from "../../components/ui/Tag/Tag";
import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export type TagType = {
  name: string;
};

const CreatePost = () => {
  const [allTags, setAllTags] = useState<TagType[]>();

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

  console.log(allTags);

  const form = useForm<Post>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      tags: [],
    },
  });

  const onSubmit: SubmitHandler<Post> = async (data: Post) => {
    console.log("logging");

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
  // const tagOptions = allTags?.map((tag) => {
  //   return tag.name;
  // });

  // console.log("allTags", allTags);

  const { register } = form;

  useEffect(() => {
    console.log("Form Errors:", form.formState.errors);
  }, [form.getValues()]);

  const tagVals = form.watch("tags");
  // console.log("the tags", form.getValues("tags"));
  // useEffect(() => {
  //   console.log("Updated tagVals:", tagVals); // Should show array of objects with id and name
  // }, [tagVals]);

  console.log(tagVals);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Input label="Title" name="title" />

        <Select
          isMulti
          // name="tags"
          options={tagOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          {...register("tags")}
          onChange={(selectedOptions) => {
            console.log("selected options", selectedOptions);
            // form.setValue("tags" selectedOptions);
            // form.setValue("tags", {
            //   name: selectedOptions.label,
            //   id: selectedOptions.value,
            // });
          }}

          // onChange={(selectedOptions) => {
          //   const selectedValues =
          //     selectedOptions?.map((option) => ({
          //       id: option.value,
          //       name: option.label,
          //     })) || [];
          //   form.setValue("tags", selectedValues);
          // }}
          // onChange={(selectedOptions) => {
          //   const selectedValues = selectedOptions
          //     ? selectedOptions.map((option) => option.value)
          //     : [];
          //   console.log("selectedValues", selectedValues);
          //   form.setValue("tags", selectedValues);
          // }}
        />

        {/* <select>
          {allTags?.map((tag) => {
            return (
              <option key={tag.id} value={tag.name}>
                {tag.name}
              </option>
            );
          })}
        </select> */}

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
