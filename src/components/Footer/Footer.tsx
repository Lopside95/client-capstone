import { useNavigate, useParams } from "react-router";
import "./Footer.scss";
import Button from "../ui/Button/Button";
import { EditIcon, HomeIcon, PersonIcon, SideSheet } from "evergreen-ui";
import { useState } from "react";

const Footer = () => {
  const navigate = useNavigate();

  // const { id } = useParams();
  // const authToken = localStorage.getItem("authToken");

  const handleLogOut = () => {
    localStorage.removeItem("authToken");

    navigate(`/users/login`);
  };

  //   const handleNavigate = async (path: string) => {
  //     navigate(path);
  //     setIsShown(false);
  //   };

  return (
    <footer className="footer">
      <span className="footer__button" onClick={() => navigate("/")}>
        <HomeIcon />
      </span>
      <span className="footer__button" onClick={() => navigate("/create-post")}>
        <EditIcon />
      </span>
      <span className="footer__button" onClick={() => navigate("/account")}>
        <PersonIcon />
      </span>
      {/* <span className="footer__button"onClick={() => navigate("/create-post")} ></span> */}
      {/* <Button onClick={() => navigate("/")}>Home</Button> */}
      {/* <Button onClick={() => navigate("/posts")}>Posts</Button>
      <Button onClick={() => navigate("/create-post")}>Create new post</Button>
      <Button onClick={() => navigate("/users/signup")}>Sign Up</Button>
      <Button onClick={() => navigate("/users/login")}>Log In</Button>
      <Button onClick={() => navigate(`/users/account`)}>Account</Button>
      <Button onClick={handleLogOut}>Log out</Button> */}
    </footer>
  );
};

export default Footer;
{
  /* <Button onClick={() => navigate("/")}>Home</Button>
      <Button onClick={() => navigate("/posts")}>Posts</Button>
      <Button onClick={() => navigate("/create-post")}>Create new post</Button>
      <Button onClick={() => navigate("/users/signup")}>Sign Up</Button>
      <Button onClick={() => navigate("/users/login")}>Log In</Button>
      <Button onClick={() => navigate(`/users/account`)}>Account</Button>
      <Button onClick={handleLogOut}>Log out</Button> */
}
