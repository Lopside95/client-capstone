import { Badge } from "evergreen-ui";
import { MyBadgeProps } from "../../../utils/types/components";

const StatusBadge = ({ children, ...props }: MyBadgeProps) => {
  return <Badge {...props}>{children}</Badge>;
};

export default StatusBadge;
