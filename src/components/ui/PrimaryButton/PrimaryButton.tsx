import { ButtonProps } from "../../../utils/types/components";
import { Button } from "evergreen-ui";
import "./PrimaryButton.scss";

const PrimaryButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      className={props.className}
      onClick={props.onClick}
      appearance="primary"
      backgroundColor="white"
      color="black"
      border="none"
      height="2.5rem"
      fontSize="1.25rem"
      // fontSize={"2.5rem"}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
