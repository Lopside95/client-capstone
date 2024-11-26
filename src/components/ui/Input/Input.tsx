import { TextProps } from "../../../utils/types/components";
import "./Input.scss";

const Input = ({ name, label, placeholder }: TextProps) => {
  return (
    <>
      <label className="label">{label}</label>
      <input className="input" name={name} placeholder={placeholder} />
    </>
  );
};

export default Input;
