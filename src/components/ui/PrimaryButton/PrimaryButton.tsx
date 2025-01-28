import { Button } from "evergreen-ui";
import "./PrimaryButton.scss";
import { MyButtonProps } from "../../../utils/types/components";
import { tertiary } from "../../../pages/Home/Home";

const PrimaryButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      borderRadius={"11px"}
      className={props.className}
      onClick={props.onClick}
      appearance="primary"
      width={props.buttonWidth || "9.375rem"}
      backgroundColor={props.backColor || "white"}
      color="black"
      border="none"
      height={props.height || "2.5rem"}
      fontSize={props.fontSize || "1.25rem"}
      marginTop={props.marginTop || ""}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
