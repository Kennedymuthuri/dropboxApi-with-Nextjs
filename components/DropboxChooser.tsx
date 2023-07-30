import React from "react";
import { DropboxChooser } from "react-dropbox-chooser";

const DropboxChooserComponent: React.FC = () => {
  const handleSuccess = (files: any[]) => {
    // Handle the selected files from Dropbox
    console.log("Selected files:", files);
  };

  const handleCancel = () => {
    // Handle the user canceling the file selection
    console.log("File selection canceled");
  };

  return (
    <DropboxChooser
      appKey="sz4xbazcu1jzj77"
      success={handleSuccess}
      cancel={handleCancel}
      multiselect
      extensions={[".pdf", ".docx", ".jpg"]}
    />
  );
};

export default DropboxChooserComponent;
