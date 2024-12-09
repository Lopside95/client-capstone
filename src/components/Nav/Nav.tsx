import { useNavigate, useParams } from "react-router";
import "./Nav.scss";
import Button from "../ui/Button/Button";
import { MenuIcon, SideSheet } from "evergreen-ui";
import { useState } from "react";

const Nav = () => {
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");
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

        <span
          className="nav__item"
          onClick={() => handleNavigate("/posts/create-post")}
        >
          New post
        </span>
        <span
          className={
            authToken
              ? `nav__item nav__item--hide `
              : `nav__item nav__item--show `
          }
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
