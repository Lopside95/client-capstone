import { useLocation, useNavigate, useParams } from "react-router";
import "./Footer.scss";
import Button from "../ui/Button/Button";
import { EditIcon, HomeIcon, PersonIcon, SideSheet } from "evergreen-ui";
import { useState } from "react";
import { primary, tertiary } from "../../pages/Home/Home";

const Footer = () => {
  const navigate = useNavigate();

  // const { id } = useParams();
  const authToken = localStorage.getItem("authToken");

  const location = useLocation();

  const handleLogOut = () => {
    localStorage.removeItem("authToken");

    navigate(`/users/login`);
  };
  // if (location.pathname === "/posts/create-post") {
  //   setPageHeader("New Post");
  // } else if (location.pathname === "/users/signup") {
  //   setPageHeader("Sign Up");
  // } else if (location.pathname === "/users/login") {
  //   setPageHeader("Log In");
  // } else if (location.pathname === "/users/account") {
  //   setPageHeader("Account");
  // } else {
  //   setPageHeader("");
  // }
  return (
    <footer className="footer">
      <span className="footer__button" onClick={() => navigate("/")}>
        <HomeIcon color={location.pathname === "/" ? tertiary : ""} size={20} />
      </span>
      <span
        className="footer__button"
        onClick={() => navigate("/posts/create-post")}
      >
        <EditIcon
          color={location.pathname === "/posts/create-post" ? tertiary : ""}
          size={25}
        />
      </span>
      <span
        className="footer__button"
        // onClick={() => navigate("/users/account")}
        onClick={() =>
          authToken ? navigate("/users/account") : navigate("/users/login")
        }
      >
        <PersonIcon
          color={location.pathname === "/users/account" ? tertiary : ""}
          size={20}
        />
      </span>
    </footer>
  );
};

export default Footer;
// import { useNavigate, useParams } from "react-router";
// import "./Footer.scss";
// import Button from "../ui/Button/Button";
// import { EditIcon, HomeIcon, PersonIcon, SideSheet } from "evergreen-ui";
// import { useState } from "react";
// import { primary } from "../../pages/Home/Home";

// const Footer = () => {
//   const navigate = useNavigate();

//   // const { id } = useParams();
//   const authToken = localStorage.getItem("authToken");

//   const handleLogOut = () => {
//     localStorage.removeItem("authToken");

//     navigate(`/users/login`);
//   };

//   return (
//     <footer className="footer">
//       <span className="footer__button" onClick={() => navigate("/")}>
//         <HomeIcon color={primary} size={20} />
//       </span>
//       <span
//         className="footer__button"
//         onClick={() => navigate("/posts/create-post")}
//       >
//         <EditIcon size={25} color={primary} />
//       </span>
//       <span
//         className="footer__button"
//         // onClick={() => navigate("/users/account")}
//         onClick={() =>
//           authToken ? navigate("/users/account") : navigate("/users/login")
//         }
//       >
//         <PersonIcon color={authToken ? primary : "orange"} size={20} />
//       </span>
//     </footer>
//   );
// };

// export default Footer;
