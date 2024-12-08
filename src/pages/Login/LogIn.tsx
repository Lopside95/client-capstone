import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import { User } from "../../utils/types/posts";
import { login } from "../../utils/api";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import { loginSchema, LoginSchema } from "../../utils/types/schemas";
import "./LogIn.scss";
import { primary } from "../Home/Home";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";

const LogIn = () => {
  const [user, setUser] = useState<User>();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "j@m.com",
      password: "1",
    },
  });

  useEffect(() => {
    console.log("Form Errors:", form.formState.errors);
  }, [form.formState]);

  const onSubmit: SubmitHandler<LoginSchema> = async (data: LoginSchema) => {
    try {
      const res = await login(data);
      console.log("login res", res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* <section className="section"><UserCard user={user} /></section> */}
      <FormProvider {...form}>
        <form className="login main" onSubmit={form.handleSubmit(onSubmit)}>
          <Input label="Email" name="email" />
          <Input label="Password" name="password" />
          <PrimaryButton
            type="submit"
            backColor={primary}
            buttonWidth={"9.375rem"}
            className="primary__button primary__button-next"
          >
            Log in
          </PrimaryButton>

          {/* <Button type="submit">Log in</Button> */}
        </form>
      </FormProvider>
    </div>
  );
};

export default LogIn;
