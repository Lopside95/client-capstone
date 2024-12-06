import { useFormContext } from "react-hook-form";
import { TextProps } from "../../../utils/types/components";
import { Label, TextInput, TextInputField } from "evergreen-ui";
import "./Input.scss";

const Input = ({ name, label, placeholder, className, type }: TextProps) => {
  const { register } = useFormContext();

  return (
    <div className="input__container">
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        className={className}
        // className="no-border"
        // className="only-input"

        backgroundColor={secondary}
        border="none"
        type={type}
        placeholder={placeholder}
        {...register(name)}
        // label={label}
      />
    </div>
  );
};

export default Input;

export const secondary = "#efeded";
