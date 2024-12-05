import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import Card from "../../components/Card/Card";
import { Pill } from "evergreen-ui";
import type { PillProps } from "evergreen-ui";
import { User } from "../../utils/types/posts";
import { getUserById, getUsers, login } from "../../utils/api";
import { useParams } from "react-router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import UserCard from "../../components/UserCard/UserCard";
import { loginSchema, LoginSchema } from "../../utils/types/schemas";
import axios from "axios";

const LogIn = () => {
  const [user, setUser] = useState<User>();

  //   const { id } = useParams();

  //   const fetchUser = async () => {
  //     try {
  //       const res = await getUserById(id);

  //       setUser(res);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchUser();
  //   }, []);
  //   const { data } = await axios.post(
  //     `${import.meta.env.VITE_API_BASE_URL}/users/login`,
  //     {
  //       email: formData.email,
  //       password: formData.password,
  //     }
  //   );

  //   localStorage.setItem("authToken", data.authToken);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "me@email.com",
      password: "me123",
    },
  });

  useEffect(() => {
    console.log("Form Errors:", form.formState.errors);
  }, [form.formState]);

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      // const res = await axios.post(
      //   `${import.meta.env.VITE_API_URL}/users/login`,
      //   data
      // );

      const loginData = await login(data);
      //   const data = res.data;
      console.log("data in login", data);
      localStorage.setItem("authToken", loginData.data.authToken);
      //   const res = await login();
      //   return res;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="section">{/* <UserCard user={user} /> */}</section>
      <FormProvider {...form}>
        <form className="main" onSubmit={form.handleSubmit(onSubmit)}>
          <Input label="Email" name="email" />
          <Input label="Password" name="password" />
          <Button type="submit">Log in</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default LogIn;
