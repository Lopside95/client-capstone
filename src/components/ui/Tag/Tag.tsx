import { useFormContext } from "react-hook-form";
import { ButtonProps } from "../../../utils/types/components";

const TagButton = ({ name, title, type, onClick, children }: ButtonProps) => {
  const { register } = useFormContext();

  return (
    <button
      type={type}
      className="button"
      {...register(name)}
      onClick={onClick}
    >
      {children || title}
    </button>
  );
};

export default TagButton;
