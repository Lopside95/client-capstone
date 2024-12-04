import { ButtonProps } from "../../../utils/types/components";
import { Button as EvButton } from "evergreen-ui";
import "./PrimaryButton.scss";

const PrimaryButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  console.log(props.className);

  return (
    <EvButton
      className={props.className}
      onClick={props.onClick}
      appearance="primary"
    >
      {children}
    </EvButton>
  );
};

export default PrimaryButton;
