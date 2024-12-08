import { Button, toaster } from "evergreen-ui";

export interface ToastProps {
  message: string;
  toastType?: "success" | "warning" | "danger" | "notify";
  duration?: number;
  hasCloseButton?: boolean;
}

const Toaster = () => {
  return <Button onClick={() => toaster.success("Success!")}>Success</Button>;
};

export default Toaster;
