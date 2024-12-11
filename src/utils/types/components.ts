import {
  BadgeProps,
  BoxComponent,
  PillOwnProps,
  PillProps,
  TextInputFieldProps,
  TextInputOwnProps,
} from "evergreen-ui";
import { ButtonHTMLAttributes } from "react";
import { PostType } from "./enums";

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
  isRequired?: boolean;
  textWith?: string;
  defaultValue?: string;
}

export interface MyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  backColor?: string;
  buttonWidth?: string | number;
}

export interface MyPillProps extends PillProps {
  title?: string;
}

export interface MyBadgeProps extends BadgeProps {
  title?: string;
  postType?: PostType;
}

export type MyImageProps = {
  width?: string | number;
  height?: string | number;
  className?: string;
};
