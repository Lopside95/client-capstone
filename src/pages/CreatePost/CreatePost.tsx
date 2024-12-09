import {
  FormProvider,
  SubmitHandler,
  useForm,
  FieldValues,
  FieldErrors,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/ui/Input/Input";
import { useEffect, useState } from "react";
import Select from "react-select";
import { PostSchema, postSchema, TagSchema } from "../../utils/types/schemas";
import "./CreatePost.scss";
import { FileUploader, Label } from "evergreen-ui";
import { getTags } from "../../utils/api";
import { createPost } from "../../utils/posts";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { primary } from "../Home/Home";
import { MyMap, User, UserMarker } from "../../utils/types/posts";
import MapComponent from "../../components/Map/Map";
import axios from "axios";
import UploadImage from "../../components/UploadImage/UploadImage";

const CreatePost = () => {
  const [allTags, setAllTags] = useState<TagSchema[]>();
  const [userMarkers, setUserMarkers] = useState<UserMarker[]>([]);
  const [user, setUser] = useState<User>();

  const authToken = localStorage.getItem("authToken");

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts`,
        {
          headers: {
            authorisation: `Bearer ${authToken}`,
          },
        }
      );

      const userData: User = {
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        password: data.password,
        active: data.active,
        posts: data.posts,
        created_at: data.created_at,
        updated_at: data.updated_at,
      };
      console.log(userData);

      setUser(userData);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
      userId: user?.id,
    },
  });

  useEffect(() => {
    if (userMarkers.length) {
      form.setValue("latitude", userMarkers[0].lat);
      form.setValue("longitude", userMarkers[0].lng);
    }
  }, [userMarkers]);

  const onSubmit: SubmitHandler<PostSchema> = async (data: PostSchema) => {
    try {
      console.log("datat", data);

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/posts`,
          data,
          {
            headers: {
              authorisation: `Bearer ${authToken}`,
            },
          }
        );

        return res;
      } catch (error) {
        console.log("There was an error in get authed user", error);
        console.error(error);
      }

      // const res = await createPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  const tagOptions = allTags?.map((tag) => ({
    label: tag.name,
    value: tag.id,
  }));

  const { register, watch, formState } = form;

  const [formErrors, setFormErrors] = useState<FieldErrors<FieldValues>>();

  useEffect(() => {
    if (formState.errors) {
      setFormErrors(formState.errors);
    }
  }, [formState]);

  return (
    <FormProvider {...form} control={form.control}>
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
        <section className="upload-image">
          <FileUploader />
        </section>
        <section className="map-container-div">
          <MapComponent
            userMarkers={userMarkers}
            setUserMarkers={setUserMarkers}
          />
        </section>

        <PrimaryButton
          type="submit"
          backColor={primary}
          buttonWidth={"9.375rem"}
          className="primary__button primary__button-next"
        >
          Done
        </PrimaryButton>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
