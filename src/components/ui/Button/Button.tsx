import { ButtonProps } from "../../../utils/types/components";
import { Button as EvButton } from "evergreen-ui";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <EvButton onClick={props.onClick} appearance="default">
      {children}
    </EvButton>
  );
};

export default Button;
