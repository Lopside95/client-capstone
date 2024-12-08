import {
  useFormContext,
  UseFormGetFieldState,
  FieldValues,
  FormState,
  FieldError,
  FieldErrors,
} from "react-hook-form";
import { TextProps } from "../../../utils/types/components";
import { Label, TextInput, TextInputField } from "evergreen-ui";
import "./Input.scss";
import { useEffect, useState } from "react";
import { secondary } from "../../../pages/Home/Home";

const Input = ({
  name,
  label,
  placeholder,
  className,
  type,
  defaultValue,
}: TextProps) => {
  const { register, getFieldState, formState } = useFormContext();

  const myState = getFieldState(name);

  return (
    <div className="input__container">
      <Label color={!myState.invalid ? "" : "orange"} htmlFor="title">
        {myState.invalid ? `${label} is required` : label}
      </Label>
      <TextInput
        defaultValue={defaultValue}
        width={"100%"}
        className={className || "input"}
        backgroundColor={secondary}
        border="none"
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

export default Input;
