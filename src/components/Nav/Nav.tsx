import { useNavigate, useParams } from "react-router";
import "./Nav.scss";
import Button from "../ui/Button/Button";
import { SideSheet } from "evergreen-ui";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate();

  // const { id } = useParams();
  // const authToken = localStorage.getItem("authToken");
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");

    navigate(`/users/login`);
  };

  const handleNavigate = async (path: string) => {
    navigate(path);
    setIsShown(false);
  };

  return (
    <nav className="nav">
      <SideSheet
        isShown={isShown}
        width={"50vw"}
        position="right"
        containerProps={{
          background: "#000000",
        }}
        onCloseComplete={() => setIsShown(false)}
      >
        <p onClick={() => setIsShown(false)}>Hello</p>
        {/* <Button onClick={() => navigate("/")}>Home</Button> */}
        {/* <Button onClick={() => navigate("/posts")}>Posts</Button> */}
        {/* <Button onClick={() => navigate("/create-post")}>
          Create new post
        </Button> */}
        <Button onClick={() => handleNavigate("/posts")}>Posts</Button>
        <Button onClick={() => handleNavigate("/")}>Home</Button>
        <Button onClick={() => handleNavigate("/create-post")}>
          Create new post
        </Button>
        <Button onClick={() => handleNavigate("/users/signup")}>Sign Up</Button>
        <Button onClick={() => handleNavigate("/users/login")}>Log In</Button>
        <Button onClick={() => handleNavigate("/users/account")}>
          Account
        </Button>
        {/* <Button onClick={() => navigate("/users/signup")}>Sign Up</Button>
        <Button onClick={() => navigate("/users/login")}>Log In</Button>
        <Button onClick={() => navigate(`/users/account`)}>Account</Button> */}
        <Button onClick={handleLogOut}>Log out</Button>
      </SideSheet>
      <Button
        onClick={() => {
          console.log(isShown);
          setIsShown(true);
        }}
      >
        Side
      </Button>
    </nav>
  );
};

export default Nav;
{
  /* <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/posts")}>Posts</Button>
      <Button onClick={() => navigate("/create-post")}>Create new post</Button>
      <Button onClick={() => navigate("/users/signup")}>Sign Up</Button>
      <Button onClick={() => navigate("/users/login")}>Log In</Button>
      <Button onClick={() => navigate(`/users/account`)}>Account</Button>
      <Button onClick={handleLogOut}>Log out</Button> */
}
