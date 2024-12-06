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

const Input = ({ name, label, placeholder, className, type }: TextProps) => {
  const { register, getFieldState, formState } = useFormContext();

  const myState = getFieldState(name);

  return (
    <div className="input__container">
      {/* <Label htmlFor={name}>{label}</Label> */}
      <Label
        // onError={() =>
        //   console.log(form.setError("title", { message: "Error in title" }))
        // }
        htmlFor="title"
      >
        {myState.invalid ? `${label} is required` : label}
      </Label>
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
