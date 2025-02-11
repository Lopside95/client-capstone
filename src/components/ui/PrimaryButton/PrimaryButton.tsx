import { Button } from "evergreen-ui";
import "./PrimaryButton.scss";
import { MyButtonProps } from "../../../utils/types/components";

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
      // boxShadow={"2px 2px 2px 2px rgba(0, 0, 0, 0.25)"}
      // boxShadow={"0px 0px 2px 1px rgba(0, 0, 0, 0.25)"}
      boxShadow={"0px 0px 2px 1px rgba(0, 0, 0, 0.2)"}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
