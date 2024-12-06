import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import { User } from "../../utils/types/posts";
import { useParams } from "react-router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import { commentSchema, CommentSchema } from "../../utils/types/schemas";
import axios from "axios";

const AddComment = () => {
  const [user, setUser] = useState<User>();

  const { id } = useParams();
  console.log(id);

  const authToken = localStorage.getItem("authToken");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/account`,
        {
          headers: {
            authorisation: `Bearer ${authToken}`,
          },
        }
      );

      console.log("dtadtatat", data);

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
      user_id: user?.id,
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
      console.log("comment data: ", data);

      console.log("user", user);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return <div>You need to be logged in to add comments</div>;
  }

  console.log(user?.id);

  return (
    // <div>
    //   <section className="section">
    //     <UserCard user={user} />
    //   </section>
    <FormProvider {...form}>
      <form className="main" onSubmit={form.handleSubmit(onSubmit)}>
        {/* <Input label="Email" name="email" /> */}
        {!user ? <h4>Log in to comment</h4> : null}
        <Input label="Your comment" name="content" />
        <Button type="submit">Add comment</Button>
      </form>
    </FormProvider>
    // </div>
  );
};

export default AddComment;
