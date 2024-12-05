import { SideSheet } from "evergreen-ui";
import { useState } from "react";
import Button from "../ui/Button/Button";

export default function BasicSidesheetExample() {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        {children}
      </SideSheet>
      <Button onClick={() => setIsShown(true)}>Show Basic Side Sheet</Button>
    </>
  );
}
