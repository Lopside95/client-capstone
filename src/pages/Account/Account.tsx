import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import Card from "../../components/Card/Card";
import { Pill } from "evergreen-ui";
import type { PillProps } from "evergreen-ui";
import { User } from "../../utils/types/posts";
import { useParams } from "react-router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import UserCard from "../../components/UserCard/UserCard";
import {
  loginSchema,
  LoginSchema,
  userSchema,
  UserSchema,
} from "../../utils/types/schemas";
import axios from "axios";

const Account = () => {
  const [user, setUser] = useState<User>();

  const { id } = useParams();
  console.log(id);

  const authToken = localStorage.getItem("authToken");

  const fetchUser = async () => {
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
    fetchUser();
  }, []);

  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: user?.email,
      password: user?.password,
    },
  });

  useEffect(() => {
    console.log("Form Errors:", form.formState.errors);
  }, [form.formState]);

  const onSubmit: SubmitHandler<UserSchema> = async (data: UserSchema) => {
    try {
      console.log("login data", data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <section className="section">
        <UserCard user={user} />
      </section>
      <FormProvider {...form}>
        <form className="main" onSubmit={form.handleSubmit(onSubmit)}>
          <Input label="Email" name="email" />
          <Input label="Password" name="password" />
          <Button type="submit">Update</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Account;
