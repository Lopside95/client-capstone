import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import Posts from "./pages/posts/Posts";

import { FormProvider, useForm } from "react-hook-form";
import CreatePost from "./pages/post/CreatePost";

export const App = () => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <BrowserRouter>
        <Routes>
          <Route />
          <Route path="/" element={<Posts />} />
          <Route path="/posts/new-post" element={<CreatePost />} />
          {/* <Route path="/posts/:id" element={<Post />} /> */}
        </Routes>
      </BrowserRouter>
    </FormProvider>
  );
};

export default App;
