import { Badge } from "evergreen-ui";
import { MyBadgeProps } from "../../../utils/types/components";
import { PostType } from "../../../utils/types/enums";

const StatusBadge = ({ children, ...props }: MyBadgeProps) => {
  const badgeColor = () => {
    if (PostType["FOUND"]) {
      return "green";
    } else if (PostType["LOST"]) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <Badge background={badgeColor()} {...props}>
      {children}
    </Badge>
  );
};

export default StatusBadge;
