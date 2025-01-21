import { FileUploader } from "evergreen-ui";
import React from "react";
import { useController } from "react-hook-form";

export type FileUploadProps = {
  name: string;
  //eslint-disable-next-line
  control: any;
};

const UploadImage = ({ name, control }: FileUploadProps) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <>
      <FileUploader />
    </>
  );
};

export default UploadImage;
