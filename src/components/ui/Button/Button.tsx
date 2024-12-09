import { MyButtonProps } from "../../../utils/types/components";
import { Button as EvButton } from "evergreen-ui";

const MyButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <EvButton
      textDecoration="underline"
      border="none"
      padding="0"
      onClick={props.onClick}
      appearance="default"
    >
      {children}
    </EvButton>
  );
};

export default MyButton;
