import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import { FormProvider, useForm } from "react-hook-form";
import CreatePost from "./pages/CreatePost/CreatePost";
import Nav from "./components/Nav/Nav";
import Posts from "./pages/Posts/Posts";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup/SignUp";
import Account from "./pages/Account/Account";

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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/users" element={<Account />} />
            <Route path="/users/:id" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </>
  );
};

export default App;
