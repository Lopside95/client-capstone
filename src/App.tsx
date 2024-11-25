import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import Posts from "./pages/posts/Posts";
import Post from "./pages/post/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
