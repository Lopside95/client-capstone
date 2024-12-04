import { useFormContext } from "react-hook-form";
import { TextProps } from "../../../utils/types/components";
import { TextInput, TextInputField } from "evergreen-ui";
import "./Input.scss";

const Input = ({ name, label, placeholder, className, type }: TextProps) => {
  const { register } = useFormContext();

  return (
    <div className={`input ${className || ""}`}>
      <TextInputField
        type={type}
        placeholder={placeholder}
        {...register(name)}
        label={label}
      />
    </div>
  );
};

export default Input;
