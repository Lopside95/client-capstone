import { useLocation, useNavigate, useParams } from "react-router";
import "./Footer.scss";
import Button from "../ui/Button/Button";
import {
  EditIcon,
  HomeIcon,
  InsertIcon,
  PersonIcon,
  SideSheet,
} from "evergreen-ui";
import { useState } from "react";
import { primary, tertiary } from "../../pages/Home/Home";

const Footer = () => {
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken");

  const location = useLocation();

  const handleLogOut = () => {
    localStorage.removeItem("authToken");

    navigate(`/users/login`);
  };

  return (
    <footer className="footer">
      <span className="footer__button" onClick={() => navigate("/")}>
        <HomeIcon color={location.pathname === "/" ? tertiary : ""} size={25} />
      </span>
      <span
        className="footer__button"
        onClick={() => navigate("/posts/create-post")}
      >
        <InsertIcon
          color={location.pathname === "/posts/create-post" ? tertiary : ""}
          size={25}
          strokeWidth={4}
        />
      </span>

      <span
        className="footer__button"
        onClick={() =>
          authToken ? navigate("/users/account") : navigate("/users/login")
        }
      >
        <PersonIcon
          color={location.pathname === "/users/account" ? tertiary : ""}
          size={25}
        />
      </span>
    </footer>
  );
};

export default Footer;
