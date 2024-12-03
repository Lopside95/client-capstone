import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import { FormProvider, useForm } from "react-hook-form";
import Posts from "./pages/posts/Posts";
import CreatePost from "./pages/CreatePost/CreatePost";
import Nav from "./components/Nav/Nav";

export const App = () => {
  const form = useForm();

  return (
    <>
      <FormProvider {...form}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </>
  );
};

export default App;
