import { TagProps } from "../../../utils/types/components";
import { Button as EvButton } from "evergreen-ui";

const TagButton = ({ title, onClick }: TagProps) => {
  return <EvButton appearance="default">{title}</EvButton>;
};

export default TagButton;
