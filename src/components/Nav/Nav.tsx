import { useLocation, useNavigate } from "react-router";
import "./Nav.scss";
import { MenuIcon, SideSheet, toaster } from "evergreen-ui";
import { useEffect, useState } from "react";

const Nav = () => {
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");
  const [isShown, setIsShown] = useState<boolean>(false);
  const [desktopIsShown, setDesktopIsShown] = useState<boolean>(false);

  const [pageHeader, setPageHeader] = useState<string>("");

  const handleLogOut = async () => {
    localStorage.removeItem("authToken");
    await navigate(`/`);
    setIsShown(false);
    setDesktopIsShown(false);
    toaster.notify("Logged out");
  };

  const location = useLocation();

  const handleNavigate = async (path: string) => {
    navigate(path);
    setIsShown(false);
    setDesktopIsShown(false);
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
          <span
            className={
              location.pathname === "/"
                ? "nav__item nav__item--active"
                : "nav__item"
            }
            onClick={() => handleNavigate("/")}
          >
            Home
          </span>

          <span
            className={
              location.pathname === "/posts/create-post"
                ? "nav__item nav__item--active"
                : "nav__item"
            }
            onClick={() => handleNavigate("/posts/create-post")}
          >
            New post
          </span>
          <span
            className={
              authToken
                ? `nav__item nav__item--hide `
                : `nav__item nav__item--show  ${
                    location.pathname === "/users/login" && "nav__item--active"
                  }`
            }
            onClick={() => handleNavigate("/users/login")}
          >
            Log In
          </span>
          <span
            className={
              authToken
                ? `nav__item nav__item--hide `
                : `nav__item nav__item--show ${
                    location.pathname === "/users/signup" && "nav__item--active"
                  }`
            }
            onClick={() => handleNavigate("/users/signup")}
          >
            Sign Up
          </span>
          <span
            className={
              authToken
                ? `nav__item nav__item--show ${
                    location.pathname === "/users/signup" && "nav__item--active"
                  } `
                : `nav__item nav__item--hide 
                
                `
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
          <span
            className="nav__item"
            onClick={() =>
              (window.location.href = "mailto:findmydogdev@gmail.com")
            }
          >
            Contact
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
      <nav className="nav-desktop">
        <SideSheet
          isShown={desktopIsShown}
          width={"40vw"}
          position="right"
          containerProps={{
            className: "nav-desktop__side-sheet",
            display: "flex",
            flexDirection: "row",
            padding: "1.5rem",
            gap: "1rem",
          }}
          onCloseComplete={() => setDesktopIsShown(false)}
        >
          <span
            className={
              location.pathname === "/"
                ? "nav__item nav-desktop__item nav__item--active"
                : "nav__item"
            }
            onClick={() => handleNavigate("/")}
          >
            Home
          </span>

          <span
            className={
              location.pathname === "/posts/create-post"
                ? "nav__item nav-desktop__item nav__item--active"
                : "nav__item"
            }
            onClick={() => handleNavigate("/posts/create-post")}
          >
            New post
          </span>
          <span
            className={
              authToken
                ? `nav__item nav__item--hide `
                : `nav__item nav__item--show ${
                    location.pathname === "/users/login" && "nav__item--active"
                  }`
            }
            onClick={() => handleNavigate("/users/login")}
          >
            Log In
          </span>
          <span
            className={
              authToken
                ? `nav__item nav__item--hide `
                : `nav__item nav__item--show ${
                    location.pathname === "/users/signup" && "nav__item--active"
                  } `
            }
            onClick={() => handleNavigate("/users/signup")}
          >
            Sign Up
          </span>
          <span
            className={
              authToken
                ? `nav__item nav__item--show  ${
                    location.pathname === "/users/account" &&
                    "nav__item--active"
                  }`
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
          {/* <span
            className="nav__item"
            onClick={() =>
              (window.location.href = "mailto:findmydogdev@gmail.com")
            }
          >
            Contact
          </span> */}
        </SideSheet>

        <MenuIcon
          cursor="pointer"
          className="menu-icon"
          onClick={() => {
            setDesktopIsShown(true);
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
