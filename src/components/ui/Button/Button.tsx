import { MyButtonProps } from "../../../utils/types/components";
import { Button as EvButton } from "evergreen-ui";

const Button: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <EvButton
      border="none"
      padding="0"
      onClick={props.onClick}
      appearance="default"
    >
      {children}
    </EvButton>
  );
};

export default Button;
