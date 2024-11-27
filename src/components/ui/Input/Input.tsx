import { useFormContext } from "react-hook-form";
import { TextProps } from "../../../utils/types/components";
import "./Input.scss";

const Input = ({ name, label, placeholder }: TextProps) => {
  const { register } = useFormContext();

  return (
    <>
      <label className="label">{label}</label>
      <input className="input" {...register(name)} placeholder={placeholder} />
    </>
  );
};

export default Input;
