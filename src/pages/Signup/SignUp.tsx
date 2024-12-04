import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { userSchema, UserSchema } from "../../utils/types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/ui/Input/Input";

const SignUp = () => {
  const form = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<UserSchema> = async (data: UserSchema) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...form}>
      <form className="main" onSubmit={form.handleSubmit(onSubmit)}>
        <Input name="firstName" label="First name" placeholder="First name" />
        <Input name="lastName" label="Last name" placeholder="Last name" />
        {/* <Input name="" label="" placeholder="" /> */}
      </form>
    </FormProvider>
  );
};

export default SignUp;
