import { useFormContext } from "react-hook-form";
import { ButtonProps, TagProps } from "../../../utils/types/components";
import { Button as EvButton } from "evergreen-ui";

const TagButton = ({ title, onClick }: TagProps) => {
  const { register } = useFormContext();

  return <EvButton appearance="default">{title}</EvButton>;
};

export default TagButton;
