import { useEffect } from "react";
import Input from "../../components/ui/Input/Input";
import { login } from "../../utils/api";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "../../utils/types/schemas";
import "./LogIn.scss";
import { primary } from "../Home/Home";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router";
import { Button, toaster } from "evergreen-ui";
import PasswordInput from "../../components/ui/PasswordInput/PasswordInput";

const LogIn = () => {
  const navigate = useNavigate();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "james@email.com",
      password: "passlp",
    },
  });

  // useEffect(() => {
  //   console.log("Form Errors:", form.formState.errors);
  // }, [form.formState]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
          <Input label="Email" name="email" placeholder="your@email.com" />
          <PasswordInput
            name="password"
            label="Password"
            placeholder="Password"
          />
          <PrimaryButton
            type="submit"
            backColor={primary}
            className="primary__button primary__button-next"
            marginTop={"1.25rem"}
          >
            Log In
          </PrimaryButton>
          <br />
          <Button
            fontSize={14}
            padding={10}
            borderRadius={30}
            color="black"
            intent="success"
            onClick={(e) => {
              e.preventDefault();
              navigate("/users/signup");
            }}
          >
            Sign Up
          </Button>
          {/* <MyButton
            fontSize="2rem"
            onClick={(e) => {
              e.preventDefault();
              navigate("/users/signup");
            }}
            className="primary__button primary__button-next"
          >
            Sign Up
          </MyButton> */}
        </form>
      </FormProvider>
    </div>
  );
};

export default LogIn;
