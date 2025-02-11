import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/ui/Input/Input";
import { useEffect, useState } from "react";
import Select from "react-select";
import { PostSchema, postSchema, Tag } from "../../utils/types/schemas";
import "./CreatePost.scss";
import { Button, Label } from "evergreen-ui";
import { baseUrl, getTags } from "../../utils/api";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { primary } from "../Home/Home";
import { User, UserMarker } from "../../utils/types/posts";
import MapComponent from "../../components/Map/Map";
import axios from "axios";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const [allTags, setAllTags] = useState<Tag[]>();
  const [userMarkers, setUserMarkers] = useState<UserMarker[]>([]);
  const [user, setUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [toastShown, setToastShown] = useState<boolean>(false);

  const authToken = localStorage.getItem("authToken");

  const navigate = useNavigate();

  const fetchUser = async () => {
    if (!authToken) {
      return;
    }

    try {
      const { data } = await axios.get(`${baseUrl}/posts`, {
        headers: {
          authorisation: `Bearer ${authToken}`,
        },
      });

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

      setUser(userData);
      setIsLoggedIn(true);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await getTags();

      setAllTags(res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUser();
    fetchData();
    window.scrollTo({ top: 0 });
  }, []);

  const form = useForm<PostSchema>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      tags: [],
      status: "OPEN",
      type: "LOST",
      img: "https://storage.googleapis.com/find-my-dog/greyhound.jpg",
      urgency: 3,
      longitude: 0,
      latitude: 0,
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
      const res = await axios.post(`${baseUrl}/posts`, data, {
        headers: {
          authorisation: `Bearer ${authToken}`,
        },
      });

      if (res.data.id) {
        navigate(`/posts/${res.data.id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const tagOptions = allTags?.map((tag) => ({
    label: tag.name,
    value: tag.id,
  }));

  const { register, watch, formState } = form;

  useEffect(() => {
    if (!isLoggedIn) {
      setToastShown(true);
    }
  }, []);

  return (
    <FormProvider {...form} control={form.control}>
      <form className="create main" onSubmit={form.handleSubmit(onSubmit)}>
        {!isLoggedIn && toastShown && (
          <div className="create__login create__login--mobile">
            <Button
              marginTop={-10}
              fontSize={14}
              padding={10}
              borderRadius={30}
              color="black"
              intent="success"
              onClick={() => navigate("/users/login")}
            >
              Log In
            </Button>
          </div>
        )}
        <section className="create__inputs">
          <Input label="Title" name="title" placeholder="Title" />
          <Input
            label="Description"
            name="description"
            placeholder="Description"
          />
          <div className="create__inputs-tags">
            <Label
              className="create__tags-label"
              htmlFor="tags"
              fontSize={16}
              fontWeight={400}
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
                form.setValue("tags", selectedTags);
              }}
              placeholder="Select Tags"
            />
          </div>
          <PrimaryButton
            type="submit"
            backColor={primary}
            buttonWidth={"9.375rem"}
            className="post__button--desktop"
          >
            Post
          </PrimaryButton>
        </section>
        <section className="create__right">
          <Label fontSize={16} fontWeight={400} className="map-label">
            Location
          </Label>
          <article className="map-container-div">
            <MapComponent
              userMarkers={userMarkers}
              setUserMarkers={setUserMarkers}
            />
          </article>
          <PrimaryButton
            type="submit"
            backColor={primary}
            buttonWidth={"9.375rem"}
            className="post__button--mobile"
          >
            Post
          </PrimaryButton>
        </section>
      </form>
    </FormProvider>
  );
};

export default CreatePost;
