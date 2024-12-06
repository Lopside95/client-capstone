import { useNavigate, useParams } from "react-router";
import "./Nav.scss";
import Button from "../ui/Button/Button";
import { MenuIcon, SideSheet } from "evergreen-ui";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate();

  // const { id } = useParams();
  const authToken = localStorage.getItem("authToken");
  console.log(authToken);
  const [isShown, setIsShown] = useState<boolean>(false);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");

    navigate(`/`);
  };

  const handleNavigate = async (path: string) => {
    navigate(path);
    setIsShown(false);
  };

  return (
    <nav className="nav">
      <SideSheet
        isShown={isShown}
        width={"40vw"}
        position="right"
        containerProps={{
          display: "flex",
          flexDirection: "column",
          padding: "1.5rem",
          gap: "0.5rem",
          alignItems: "end",
        }}
        onCloseComplete={() => setIsShown(false)}
      >
        <span className="nav__item" onClick={() => handleNavigate("/")}>
          Home
        </span>
        {/* "/posts" will; be removed from nav, it relies on post id which comess from home */}
        {/* <span className="nav__item" onClick={() => handleNavigate("/posts/2")}>
          Posts
        </span> */}
        <span
          className="nav__item"
          onClick={() => handleNavigate("/create-post")}
        >
          New post
        </span>
        <span
          className={
            authToken
              ? `nav__item nav__item--hide `
              : `nav__item nav__item--show `
          }
          // className="nav__item nav__item--no-auth"
          onClick={() => handleNavigate("/users/signup")}
        >
          Sign Up
        </span>
        <span
          className={
            authToken
              ? `nav__item nav__item--hide `
              : `nav__item nav__item--show `
          }
          // className="nav__item nav__item--no-auth"
          onClick={() => handleNavigate("/users/login")}
        >
          Log In
        </span>
        <span
          className={
            authToken
              ? `nav__item nav__item--show `
              : `nav__item nav__item--hide `
          }
          // className="nav__item nav__item--auth"
          onClick={() => handleNavigate("/users/account")}
        >
          Account
        </span>

        <span
          className={
            authToken
              ? `nav__item nav__item--show `
              : `nav__item nav__item--hide `
          }
          onClick={handleLogOut}
        >
          Log out
        </span>
      </SideSheet>

      <MenuIcon
        // width="100px"
        className="menu-icon"
        onClick={() => {
          setIsShown(true);
        }}
        size={40}
        marginTop={10}
        marginRight={10}
      />
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
