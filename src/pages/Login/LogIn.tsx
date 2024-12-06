import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import { User } from "../../utils/types/posts";
import { login } from "../../utils/api";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import { loginSchema, LoginSchema } from "../../utils/types/schemas";

const LogIn = () => {
  const [user, setUser] = useState<User>();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    console.log("Form Errors:", form.formState.errors);
  }, [form.formState]);

  const onSubmit: SubmitHandler<LoginSchema> = async (data: LoginSchema) => {
    try {
      const res = await login(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* <section className="section"><UserCard user={user} /></section> */}
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
