import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post, postSchema } from "../../utils/types/posts";
import Button from "../../components/ui/Button/Button";
import Input from "../../components/ui/Input/Input";

const CreatePost = () => {
  const form = useForm<Post>({
    resolver: zodResolver(postSchema),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<Post> = async (data: Post) => {};

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Input name="" label="Hello" />
        <Button onClick={() => console.log("clicked")} />
      </form>
    </FormProvider>
  );
};

export default CreatePost;
