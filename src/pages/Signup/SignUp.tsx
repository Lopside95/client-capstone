import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { userSchema, UserSchema } from "../../utils/types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/ui/Input/Input";
import { createUser } from "../../utils/api";
import Button from "../../components/ui/Button/Button";
import { useEffect } from "react";
import "./SignUp.scss";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { primary } from "../Home/Home";

const SignUp = () => {
  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "James",
      lastName: "Wallington",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<UserSchema> = async (data: UserSchema) => {
    try {
      console.log(data);
      const res = await createUser(data);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const formErrors = form.formState.errors;

  // useEffect(() => {
  //   console.log("Form Errors signup:", formErrors);
  // }, [form.formState]);

  return (
    <FormProvider {...form}>
      <form className="main signup" onSubmit={form.handleSubmit(onSubmit)}>
        <Input name="firstName" label="First name" placeholder="First name" />
        <Input name="lastName" label="Last name" placeholder="Last name" />
        <Input name="email" label="Email" placeholder="your@email.com" />
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
        />
        <PrimaryButton
          backColor={primary}
          className="signup__button"
          type="submit"
        >
          Sign up
        </PrimaryButton>
      </form>
    </FormProvider>
  );
};

export default SignUp;
