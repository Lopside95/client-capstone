import { ButtonHTMLAttributes } from "react";

export type TextProps = {
  name: string;
  label?: string;
  placeholder?: string;
};

export type TagProps = {
  onClick?: () => void;
  title: string;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
}

// export type ButtonProps = {
//   name?: string;
//   label?: string;
//   onClick?: () => void;
//   // onClick?: React.MouseEventHandler;
//   children?: React.ReactNode;
//   // type: HTMLButtonElement;
//   // type: ButtonHTMLAttributes<"reset" | "submit" | "button" | "undefined">;
//   // type?: "reset" | "submit" | "button" | undefined;
//   // type?: "reset" | "submit" | "button";
// };
