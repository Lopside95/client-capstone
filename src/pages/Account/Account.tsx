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
  updateUserSchema,
  UpdateUserSchema,
  userSchema,
  UserSchema,
} from "../../utils/types/schemas";
import axios from "axios";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { primary } from "../Home/Home";
import "./Account.scss";
import { baseUrl } from "../../utils/api";

const Account = () => {
  const [user, setUser] = useState<User>();

  const { id } = useParams();

  const authToken = localStorage.getItem("authToken");

  const fetchUser = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/users/account`, {
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
    } catch (error: unknown) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const form = useForm<UpdateUserSchema>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      email: user?.email,
      password: "password",
    },
  });

  useEffect(() => {
    console.log("Form Errors:", form.formState.errors);
  }, [form.formState]);

  const onSubmit: SubmitHandler<UpdateUserSchema> = async (
    data: UpdateUserSchema
  ) => {
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
    <FormProvider {...form}>
      <form className="account main" onSubmit={form.handleSubmit(onSubmit)}>
        {/* <h2 className="page-title">Account</h2> */}
        <Input
          label="First name"
          name="firstName"
          defaultValue={user?.firstName}
        />
        <Input
          label="Last name"
          name="lastName"
          defaultValue={user?.lastName}
        />
        <Input label="Email" name="email" defaultValue={user?.email} />
        <Input
          label="Password"
          name="password"
          defaultValue={user?.password}
          placeholder="Password"
          type="password"
        />
        <PrimaryButton
          type="submit"
          backColor={primary}
          buttonWidth={"9.375rem"}
          className="primary__button primary__button-account"
        >
          Update details
        </PrimaryButton>
        <img src="/dog-2.svg" className="account__cover" />
      </form>
    </FormProvider>
  );
};

export default Account;
