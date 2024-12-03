import { useFormContext } from "react-hook-form";
import { TextProps } from "../../../utils/types/components";
import { TextInput, TextInputField } from "evergreen-ui";
import "./Input.scss";

const Input = ({ name, label, placeholder }: TextProps) => {
  const { register } = useFormContext();

  return (
    <div className="input">
      <TextInputField className="" {...register(name)} label={label} />
    </div>
    // <>
    //   <label className="label">{label}</label>
    //   <input className="input" {...register(name)} placeholder={placeholder} />
    // </>
  );
};

export default Input;
