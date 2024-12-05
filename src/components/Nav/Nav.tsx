import { useNavigate, useParams } from "react-router";
import "./Nav.scss";
import Button from "../ui/Button/Button";

const Nav = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const authToken = localStorage.getItem("authToken");

  const handleLogOut = () => {
    localStorage.removeItem("authToken");

    navigate(`/users/login`);
  };

  return (
    <nav className="nav">
      <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/posts")}>Posts</Button>
      <Button onClick={() => navigate("/create-post")}>Create new post</Button>
      <Button onClick={() => navigate("/users/signup")}>Sign Up</Button>
      <Button onClick={() => navigate("/users/login")}>Log In</Button>
      {/* <Button onClick={() => navigate(`/users/1`)}>Account</Button> */}
      <Button onClick={() => navigate(`/users/account`)}>Account</Button>
      <Button onClick={handleLogOut}>Log out</Button>
    </nav>
  );
};

export default Nav;
