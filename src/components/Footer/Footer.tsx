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

  return (
    <footer className="footer">
      <span className="footer__button" onClick={() => navigate("/")}>
        <HomeIcon size={20} />
      </span>
      <span
        className="footer__button"
        onClick={() => navigate("/posts/create-post")}
      >
        <EditIcon size={25} />
      </span>
      <span
        className="footer__button"
        onClick={() => navigate("/users/account")}
      >
        <PersonIcon size={20} />
      </span>
    </footer>
  );
};

export default Footer;
