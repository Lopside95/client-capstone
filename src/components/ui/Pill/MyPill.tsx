import { Pill } from "evergreen-ui";
import { MyPillProps } from "../../../utils/types/components";
import "./MyPill.scss";

const UrgencyPill = ({ children, ...props }: MyPillProps) => {
  return (
    <Pill className="pill" {...props}>
      {children}
    </Pill>
  );
};

export default UrgencyPill;
// const MyPill: MyPillProps = ({ children, ...props }) => {
//   return <Pill>{children}</Pill>;
// };

// export default MyPill;
