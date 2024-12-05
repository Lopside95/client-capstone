import { useFormContext } from "react-hook-form";
import { TextProps } from "../../../utils/types/components";
import { Label, TextInput, TextInputField } from "evergreen-ui";
import "./Input.scss";

const Input = ({ name, label, placeholder, className, type }: TextProps) => {
  const { register } = useFormContext();
  const secondary = "#efeded";

  return (
    <div className="input__container">
      <Label>{label}</Label>
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
