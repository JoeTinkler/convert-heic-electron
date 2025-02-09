import { useEffect, useState } from "react";

export const useFileStates = () => {
  const [files, setFiles] = useState<FileState[]>([]);
  const addFile = (file: FileState) => {
    setFiles([...files, file]);
  }
  const removeFile = (path: string) => { setFiles(files?.filter((file) => file.path !== path));};
  const setFileStatus = (update: Partial<FileState>) => {
    setFiles(files?.map((file) => file.path === update.path ? { ...file, ... update } : file));
  };

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, [files]);

  return { files, addFile, removeFile, setFileStatus };
}