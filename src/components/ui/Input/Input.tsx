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
        boxShadow={"0px 0px 1px 0.5px rgba(0, 0, 0, 0.1)"}
      />
    </div>
  );
};

export default Input;
