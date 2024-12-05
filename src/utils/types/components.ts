import {
  BadgeProps,
  BoxComponent,
  PillOwnProps,
  PillProps,
  TextInputFieldProps,
  TextInputOwnProps,
} from "evergreen-ui";
import { ButtonHTMLAttributes } from "react";

// export type TextProps = {
//   name: string;
//   label?: string;
//   placeholder?: string;
//   className?: string;
// };

export type TagProps = {
  onClick?: () => void;
  title?: string;
};

export interface TextProps extends TextInputOwnProps {
  name: string;
  label?: string;
  className?: string;
  type?: string;
}
// export interface TextProps extends TextInputFieldProps {
//   name: string;
//   label?: string;
//   className?: string;
//   type?: string;
// }

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
}

// export type MyPillProps = {
//   title: string | number;
// };

export interface MyPillProps extends PillProps {
  title?: string;
}

export interface MyBadgeProps extends BadgeProps {
  title?: string;
}

export type MyImageProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
};

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
