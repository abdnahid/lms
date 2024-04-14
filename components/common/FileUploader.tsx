"use client";

import toast from "react-hot-toast";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";

interface FileUploadProps {
  handleChange: (url?: string, originalFilename?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUploader = ({ handleChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      className="text-theme"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        console.log("onClientUploadComplete res:", res);
        handleChange(res?.[0].url, res?.[0].name);
      }}
      onUploadError={(error: Error) => {
        toast.error(`${error?.message}`);
      }}
    />
  );
};
