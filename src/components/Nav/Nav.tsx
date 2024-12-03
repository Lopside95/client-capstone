import { useNavigate } from "react-router";
import "./Nav.scss";
import Button from "../ui/Button/Button";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <Button onClick={() => navigate("/")}>Main</Button>
      <Button onClick={() => navigate("/create-post")}>Create new post</Button>
    </nav>
  );
};

export default Nav;
