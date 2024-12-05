import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import Card from "../../components/Card/Card";
import { Pill } from "evergreen-ui";
import type { PillProps } from "evergreen-ui";
import { User } from "../../utils/types/posts";
import { getAuthedUser, getUserById, getUsers } from "../../utils/api";
import { useParams } from "react-router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import UserCard from "../../components/UserCard/UserCard";
import { loginSchema, LoginSchema } from "../../utils/types/schemas";
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

      setUser(data);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: user?.email,
      password: user?.password,
    },
  });

  useEffect(() => {
    console.log("Form Errors:", form.formState.errors);
  }, [form.formState]);

  const onSubmit: SubmitHandler<LoginSchema> = async (data: LoginSchema) => {
    try {
      console.log("logibn data", data);
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
