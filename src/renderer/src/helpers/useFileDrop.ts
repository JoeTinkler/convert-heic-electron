import { useCallback, useState } from "react";
import { useConvertHeic } from "./useConvertHeic";
import { fileBase64Async, supportedImageTypes, validHeicPath } from "./file";
import picture from '../assets/picture.svg';

export const useFileDrop = (outputType: OutputType, addFile: (file: FileState) => void, setFileStatus: (file: Partial<FileState>) => void) => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const { convertHeic } = useConvertHeic(setFileStatus);

  const onDragEnter = () => setDragActive(true);
  const onDragLeave = () => setDragActive(false);
  const onDrop = () => setDragActive(false);

  const onFileDrop = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
        return;
    }
    await Promise.all(Array.from(e.target.files).map(async (file) => {
      const src = supportedImageTypes(file.path) ? await fileBase64Async(file) : picture;
      if (!validHeicPath(file.path)) {
        const src = await fileBase64Async(file);
        addFile({ path: file.path, outputType, src, status: 'Error', error: 'Only .HEIC files are allowed' });
        return;
      }
      addFile({ path: file.path, outputType, src: src.replace('data:application/octet-stream', 'data:image/heic'), status: 'Converting' });
      convertHeic({ path: file.path, outputType });
    }));

    e.target.value = '';
  }, [outputType]);

  return { dragActive, onDragEnter, onDragLeave, onDrop, onFileDrop };
}