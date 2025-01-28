import { useFormContext } from "react-hook-form";
import { TextProps } from "../../../utils/types/components";
import { Label, TextInput } from "evergreen-ui";
import "./Input.scss";

const Input = ({
  name,
  label,
  placeholder,
  className,
  type,
  defaultValue,
}: TextProps) => {
  const { register, formState } = useFormContext();

  const formError = formState.errors[name];

  return (
    <div className="input__container">
      <Label
        fontSize={16}
        fontWeight={400}
        color={!formError ? "" : "orange"}
        htmlFor={name}
      >
        {formError ? formError.message?.toString() : label}
      </Label>
      <TextInput
        fontSize={16}
        defaultValue={defaultValue}
        width={"100%"}
        className={className || "input"}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

export default Input;
