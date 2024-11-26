import { useNavigate } from "react-router";
import Button from "../ui/Button/Button";
import "./Nav.scss";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <Button label="Home" onClick={() => navigate("/")} />
      <Button label="Create" onClick={() => navigate("/create-post")} />
    </nav>
  );
};

export default Nav;
