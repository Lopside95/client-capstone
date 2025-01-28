import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import { User } from "../../utils/types/posts";
import { useNavigate, useParams } from "react-router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema, CommentSchema } from "../../utils/types/schemas";
import axios from "axios";
import "./AddComment.scss";
import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";
import { primary } from "../../pages/Home/Home";
import { Button, toaster } from "evergreen-ui";
import { baseUrl } from "../../utils/api";

const AddComment = () => {
  const [user, setUser] = useState<User>();

  const { id } = useParams();

  const navigate = useNavigate();

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

  // useEffect(() => {
  //   console.log("Form Errors:", form.formState.errors);
  // }, [form.formState]);

  const onSubmit: SubmitHandler<CommentSchema> = async (
    data: CommentSchema
  ) => {
    try {
      const res = await axios.post(`${baseUrl}/posts/${id}`, data, {
        headers: {
          authorisation: `Bearer ${authToken}`,
        },
      });

      toaster.success("Comment added");

      return res;
    } catch (error) {
      console.log("There was an error in get authed user", error);
      console.error(error);
    }
  };

  if (!user) {
    return (
      <div style={{ margin: "0 auto" }}>
        <Button
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
    );
  }

  return (
    <FormProvider {...form}>
      <form className="add-comment" onSubmit={form.handleSubmit(onSubmit)}>
        {!user ? (
          <h4>
            {" "}
            <span
              onClick={() => navigate("/users/login")}
              className="login-message"
            >
              Log in
            </span>{" "}
            to comment
          </h4>
        ) : null}
        <Input label="Add comment" name="content" />
        <PrimaryButton
          type="submit"
          backColor={primary}
          buttonWidth={"9.375rem"}
          className="primary__button primary__button-comment"
        >
          Add Comment
        </PrimaryButton>
      </form>
    </FormProvider>
  );
};

export default AddComment;
