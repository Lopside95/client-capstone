import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import { FormProvider, useForm } from "react-hook-form";
import CreatePost from "./pages/CreatePost/CreatePost";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup/SignUp";
import Account from "./pages/Account/Account";
import LogIn from "./pages/Login/LogIn";
import Footer from "./components/Footer/Footer";
import SinglePost from "./pages/SinglePost/SinglePost";

export const App = () => {
  const form = useForm();

  return (
    <>
      <FormProvider {...form}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<SinglePost />} />
            <Route path="/posts/create-post" element={<CreatePost />} />
            <Route path="/users/signup" element={<SignUp />} />
            <Route path="/users/login" element={<LogIn />} />
            <Route path="/users/account" element={<Account />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FormProvider>
    </>
  );
};

export default App;
