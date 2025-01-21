import { MyButtonProps } from "../../utils/types/components";
import "./SecondaryButton.scss";

const SecondaryButton: React.FC<MyButtonProps> = ({ children, ...props }) => {
  return (
    <button className="secondary-button" {...props}>
      {children}
    </button>
  );
};

export default SecondaryButton;
