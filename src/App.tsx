import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router";
import "./App.scss";
import { FormProvider, useForm } from "react-hook-form";
import CreatePost from "./pages/CreatePost/CreatePost";
import Nav from "./components/Nav/Nav";
import Posts from "./pages/Posts/Posts";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup/SignUp";
import Account from "./pages/Account/Account";
import LogIn from "./pages/Login/LogIn";
import { Button, HomeIcon } from "evergreen-ui";
import Footer from "./components/Footer/Footer";

export const App = () => {
  const form = useForm();

  return (
    <>
      <FormProvider {...form}>
        <BrowserRouter>
          <Link
            style={
              {
                // width: "100px",
              }
            }
            // position="absolute"
            to={"/"}
            // onClick={() => navigate("/")}
            // outline="none"
            // top={2}
            // left={2}
          >
            <HomeIcon
              position="absolute"
              // onClick={() => navigate("/")}
              outline="none"
              top={5}
              left={5}
              size={30}
              color="black"
              marginTop={10}
              marginLeft={10}
            />
          </Link>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/posts/:id" element={<Posts />} />
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
