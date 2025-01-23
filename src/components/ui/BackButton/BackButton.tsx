import { ArrowLeftIcon, HomeIcon } from "evergreen-ui";
import { useNavigate } from "react-router";
import "./BackButton.scss";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <ArrowLeftIcon
        className="back-button"
        position="absolute"
        size={28}
        top={15}
        left={15}
        cursor="pointer"
        onClick={() => navigate(-1)}
      />
      <HomeIcon
        className="home-button"
        position="absolute"
        size={28}
        top={15}
        left={15}
        cursor="pointer"
        onClick={() => navigate("/")}
      />
    </>
  );
};

export default BackButton;
