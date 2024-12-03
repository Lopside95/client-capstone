import { useFormContext } from "react-hook-form";
import { ButtonProps, TagProps } from "../../../utils/types/components";

const TagButton = ({ title, onClick }: TagProps) => {
  const { register } = useFormContext();

  return <button onClick={onClick}>{title}</button>;
};

export default TagButton;
