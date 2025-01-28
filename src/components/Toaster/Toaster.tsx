import { Button, toaster } from "evergreen-ui";

export interface ToastProps {
  message: string;
  toastType?: "success" | "warning" | "danger" | "notify";
  duration?: number;
  hasCloseButton?: boolean;
}

const SuccessToaster = () => {
  return <Button onClick={() => toaster.success("Success!")}>Success</Button>;
};

const NotifyToaster = ({ message }: ToastProps) => {
  return <Button onClick={() => toaster.notify(message)}>Success</Button>;
};

export { SuccessToaster, NotifyToaster };
