import { ButtonProps } from "../../../utils/types/components";
import "./Button.scss";

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

// const Button = ({ name, type, onClick, children }: ButtonProps) => {
//   return (
//     <button type={type} className="button" onClick={onClick}>
//       {children}
//     </button>
//   );
// };

export default Button;

// import { useFormContext } from "react-hook-form";
// import { ButtonProps } from "../../../utils/types/components";

// const TagButton = ({ name, title, type, onClick, children }: ButtonProps) => {
//   const { register } = useFormContext();

//   return (
//     <button
//       type={type}
//       className="button"
//       {...register(name)}
//       onClick={onClick}
//     >
//       {children || title}
//     </button>
//   );
// };

// export default TagButton;
