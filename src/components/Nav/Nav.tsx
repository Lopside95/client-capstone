import { useNavigate, useParams } from "react-router";
import "./Nav.scss";
import Button from "../ui/Button/Button";

const Nav = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  return (
    <nav className="nav">
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/posts")}>Posts</Button>
      <Button onClick={() => navigate("/create-post")}>Create new post</Button>
      <Button onClick={() => navigate("/signup")}>Sign Up</Button>
      <Button onClick={() => navigate(`/users/${id}`)}>Account</Button>
    </nav>
  );
};

export default Nav;
