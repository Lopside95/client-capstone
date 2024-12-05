import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import { FormProvider, useForm } from "react-hook-form";
import CreatePost from "./pages/CreatePost/CreatePost";
import Nav from "./components/Nav/Nav";
import Posts from "./pages/Posts/Posts";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup/SignUp";
import Account from "./pages/Account/Account";
import LogIn from "./pages/Login/Login";

export const App = () => {
  const form = useForm();

  return (
    <>
      <FormProvider {...form}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<Posts />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/users/signup" element={<SignUp />} />
            <Route path="/users/login" element={<LogIn />} />
            <Route path="/users/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </>
  );
};

export default App;
