import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import { User } from "../../utils/types/posts";
import { useParams } from "react-router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import { commentSchema, CommentSchema } from "../../utils/types/schemas";
import axios from "axios";
import { postComment } from "../../utils/comments";
import "./AddComment.scss";
import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";
import { primary } from "../../pages/Home/Home";

const AddComment = () => {
  const [user, setUser] = useState<User>();

  const { id } = useParams();
  console.log(id);

  const authToken = localStorage.getItem("authToken");

  const fetchData = async () => {
    if (!authToken) {
      return;
    }

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/account`,
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

      setUser(userData);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const form = useForm<CommentSchema>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      post_id: id,
    },
  });

  useEffect(() => {
    console.log("Form Errors:", form.formState.errors);
    console.log(form.getValues());
  }, [form.formState]);

  const onSubmit: SubmitHandler<CommentSchema> = async (
    data: CommentSchema
  ) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts/${id}`,
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
  };

  console.log(user?.id);

  if (!user) {
    return (
      <div style={{ margin: "0 auto" }}>
        <h3>Log in to add comments</h3>
      </div>
    );
  }

  return (
    <FormProvider {...form}>
      <form className="main add-comment" onSubmit={form.handleSubmit(onSubmit)}>
        {/* <Input label="Email" name="email" /> */}
        {!user ? <h4>Log in to comment</h4> : null}
        <Input label="Your comment" name="content" />
        <PrimaryButton
          type="submit"
          backColor={primary}
          buttonWidth={"9.375rem"}
          className="primary__button primary__button-comment"
        >
          Comment
        </PrimaryButton>
      </form>
    </FormProvider>
    // </div>
  );
};

export default AddComment;
