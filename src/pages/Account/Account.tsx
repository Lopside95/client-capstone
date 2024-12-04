import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import Card from "../../components/Card/Card";
import { Pill } from "evergreen-ui";
import type { PillProps } from "evergreen-ui";
import { User } from "../../utils/types/posts";
import { getUserById, getUsers } from "../../utils/api";
import { useParams } from "react-router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { UserSchema, userSchema } from "../../utils/types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import UserCard from "../../components/UserCard/UserCard";

const Account = () => {
  const [user, setUser] = useState<User>();

  const { id } = useParams();
  console.log(id);

  const fetchUser = async () => {
    try {
      const res = await getUserById(id);

      setUser(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      password: user?.password,
      active: user?.active || true,
    },
  });

  useEffect(() => {
    console.log("Form Errors:", form.formState.errors);
  }, [form.formState]);

  const onSubmit: SubmitHandler<UserSchema> = async (data: UserSchema) => {
    try {
      console.log("datat", data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(user);

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
          <Input label="First name" name="firstName" />
          <Input label="Last name" name="lastName" />
          <Input label="Email" name="email" />
          <Input label="Password" name="password" />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Account;
