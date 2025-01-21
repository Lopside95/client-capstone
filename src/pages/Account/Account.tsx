import { useEffect, useState } from "react";
import Input from "../../components/ui/Input/Input";
import { User } from "../../utils/types/posts";
import { useNavigate, useParams } from "react-router";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema, UpdateUserSchema } from "../../utils/types/schemas";
import axios from "axios";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { primary, secondary, tertiary } from "../Home/Home";
import "./Account.scss";
import { baseUrl, deleteUser, updateUser } from "../../utils/api";
import MyButton from "../../components/ui/Button/Button";
import { Button, Dialog, Spinner } from "evergreen-ui";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import MyDialog from "../../components/Dialog/MyDialog";

const Account = () => {
  const [user, setUser] = useState<User | null>(null);
  const [dialogIsShown, setDialogIsShown] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const authToken = localStorage.getItem("authToken");

  const navigate = useNavigate();

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
      password: user?.password || "pass123",
    },
  });

  // useEffect(() => {
  //   console.log("Form Errors:", form.formState.errors);
  // }, [form.formState]);

  const onSubmit: SubmitHandler<UpdateUserSchema> = async (
    data: UpdateUserSchema
  ) => {
    try {
      await updateUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      if (!user) {
        console.log("No user found");
        return;
      }

      const res = await deleteUser(user?.email);

      if (res?.status === 200) {
        localStorage.removeItem("authToken");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return <NotFoundPage />;
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
          Update Details
        </PrimaryButton>
        <MyDialog
          handleDelete={handleDelete}
          dialogIsShown={dialogIsShown}
          setDialogIsShown={setDialogIsShown}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          item="Account"
        />
        <MyButton
          onClick={(e) => {
            e.preventDefault();
            setDialogIsShown(true);
          }}
          backColor={primary}
          buttonWidth={"9.375rem"}
        >
          Delete Account
        </MyButton>
        <img src="/dog-2.svg" className="account__cover" />
      </form>
    </FormProvider>
  );
};

export default Account;
