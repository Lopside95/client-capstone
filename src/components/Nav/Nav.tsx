import { useNavigate } from "react-router";
import "./Nav.scss";
import Button from "../ui/Button/Button";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/posts")}>Posts</Button>
      <Button onClick={() => navigate("/create-post")}>Create new post</Button>
      <Button onClick={() => navigate("/signup")}>Sign Up</Button>
    </nav>
  );
};

export default Nav;
