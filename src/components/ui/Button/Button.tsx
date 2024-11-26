import { ButtonProps } from "../../../utils/types/components";
import "./Button.scss";

const Button = ({ name, label, onClick }: ButtonProps) => {
  return (
    <>
      <button className="button" onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
