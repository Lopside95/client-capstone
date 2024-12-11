import { ArrowLeftIcon } from "evergreen-ui";
import { useNavigate } from "react-router";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <ArrowLeftIcon
      position="absolute"
      size={30}
      top={15}
      left={15}
      cursor="pointer"
      onClick={() => navigate(-1)}
    />
  );
};

export default BackButton;
