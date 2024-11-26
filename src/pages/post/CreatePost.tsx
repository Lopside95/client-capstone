import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@components/ui/Input";
import { Post, postSchema } from "@utils/types/zod";

const CreatePost = () => {
  const form = useForm<Post>({
    resolver: zodResolver(postSchema),
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<Post> = async (data: Post) => {};

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Input name="" />
      </form>
    </FormProvider>
  );
};

export default CreatePost;
