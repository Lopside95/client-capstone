import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import { User } from "../../utils/types/posts";
import { login } from "../../utils/api";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "../../utils/types/schemas";
import "./LogIn.scss";
import { primary } from "../Home/Home";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router";
import { toaster } from "evergreen-ui";

const LogIn = () => {
  const [user, setUser] = useState<User>();

  const navigate = useNavigate();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: user?.email || "james@email.com",
      password: "pass123",
    },
  });

  // useEffect(() => {
  //   console.log("Form Errors:", form.formState.errors);
  // }, [form.formState]);

  const onSubmit: SubmitHandler<LoginSchema> = async (data: LoginSchema) => {
    try {
      const res = await login(data);
      if (res?.status !== 200) {
        toaster.warning("Login failed. Please check your details.");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form className="login main" onSubmit={form.handleSubmit(onSubmit)}>
          <Input label="Email" name="email" />
          <Input label="Password" name="password" type="password" />
          <PrimaryButton
            type="submit"
            backColor={primary}
            buttonWidth={"9.375rem"}
            className="primary__button primary__button-next"
            marginTop={"1.25rem"}
          >
            Log in
          </PrimaryButton>

          <h3>or</h3>

          <PrimaryButton
            type="submit"
            backColor={primary}
            buttonWidth={"9.375rem"}
            onClick={(e) => {
              e.preventDefault();
              navigate("/users/signup");
            }}
            className="primary__button primary__button-next"
          >
            Sign up
          </PrimaryButton>
        </form>
      </FormProvider>
    </div>
  );
};

export default LogIn;
