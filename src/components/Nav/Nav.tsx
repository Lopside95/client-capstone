import { useLocation, useNavigate, useParams } from "react-router";
import "./Nav.scss";
import Button from "../ui/Button/Button";
import { MenuIcon, SideSheet, toaster } from "evergreen-ui";
import { useEffect, useState } from "react";
import Toaster from "evergreen-ui/types/toaster/src/Toaster";

const Nav = () => {
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");
  const [isShown, setIsShown] = useState<boolean>(false);

  const [pageHeader, setPageHeader] = useState<string>("");

  const handleLogOut = async () => {
    localStorage.removeItem("authToken");
    await navigate(`/`);
    setIsShown(false);
    toaster.notify("Logged out");
  };

  const location = useLocation();

  const handleNavigate = async (path: string) => {
    navigate(path);
    setIsShown(false);
  };

  useEffect(() => {
    if (location.pathname === "/posts/create-post") {
      setPageHeader("New Post");
    } else if (location.pathname === "/users/signup") {
      setPageHeader("Sign Up");
    } else if (location.pathname === "/users/login") {
      setPageHeader("Log In");
    } else if (location.pathname === "/users/account") {
      setPageHeader("Account");
    } else {
      setPageHeader("");
    }
  }, [location]);

  return (
    <>
      <nav className="nav">
        <SideSheet
          isShown={isShown}
          width={"40vw"}
          position="right"
          containerProps={{
            className: "nav__side-sheet",
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem",
            gap: "0.8rem",
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
            onClick={() => handleNavigate("/users/login")}
          >
            Log In
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
                ? `nav__item nav__item--show `
                : `nav__item nav__item--hide `
            }
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
      <nav className="nav--desktop">
        <SideSheet
          isShown={isShown}
          width={"40vw"}
          position="right"
          containerProps={{
            className: "nav__side-sheet",
            display: "flex",
            flexDirection: "row",
            padding: "1.5rem",
            gap: "2rem",
            // alignItems: "end",
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
            onClick={() => handleNavigate("/users/login")}
          >
            Log In
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
                ? `nav__item nav__item--show `
                : `nav__item nav__item--hide `
            }
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
    </>
  );
};

export default Nav;
