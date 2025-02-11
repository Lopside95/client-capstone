import { useFormContext } from "react-hook-form";
import { PasswordProps } from "../../../utils/types/components";
import { EyeOffIcon, EyeOpenIcon, Label, TextInput } from "evergreen-ui";
import { useState } from "react";
import "./PasswordInput.scss";

const PasswordInput = ({
  name,
  label,
  placeholder,
  className,
  defaultValue,
}: PasswordProps) => {
  const { register, formState } = useFormContext();

  const [isShown, setIsShown] = useState<boolean>();

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
      <div className="password__input">
        <TextInput
          fontSize={16}
          defaultValue={defaultValue}
          width={"100%"}
          className={className || "input"}
          type={isShown ? "text" : "password"}
          placeholder={placeholder}
          {...register(name)}
          boxShadow={"0px 0px 1px 0.5px rgba(0, 0, 0, 0.1)"}
        />
        {isShown ? (
          <EyeOffIcon
            size={22}
            color="gray"
            className="password__input-eye"
            onClick={() => setIsShown(!isShown)}
          />
        ) : (
          <EyeOpenIcon
            cursor="pointer"
            size={22}
            color="gray"
            className="password__input-eye"
            onClick={() => setIsShown(!isShown)}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
