import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import { User } from "../../utils/types/posts";
import { useParams } from "react-router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema, UpdateUserSchema } from "../../utils/types/schemas";
import axios from "axios";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { primary } from "../Home/Home";
import "./Account.scss";
import { baseUrl, deleteUser, updateUser } from "../../utils/api";

const Account = () => {
  const [user, setUser] = useState<User>();

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
      firstName: user?.firstName,
      lastName: user?.lastName,
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
      const res = await updateUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const userEmail = form.watch("email");

  const handleDelete = async () => {
    try {
      if (!user) {
        console.log("noEmail", user);
        return;
      }

      const res = await deleteUser(userEmail);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return <div>404 Page Not Found</div>;
  }

  return (
    <FormProvider {...form}>
      <form className="account main" onSubmit={form.handleSubmit(onSubmit)}>
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
        <PrimaryButton
          onClick={handleDelete}
          // onClick={() => handleDelete(user?.email)}
          backColor={primary}
          buttonWidth={"9.375rem"}
          className="primary__button primary__button-account"
        >
          Delete account
        </PrimaryButton>
        <img src="/dog-2.svg" className="account__cover" />
      </form>
    </FormProvider>
  );
};

export default Account;
