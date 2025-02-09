import React, { useRef, useState } from 'react';
import picture from '../assets/picture.svg'
import { DropWrapper, DropFileLabel, DropFileInput, BrowseLink } from './ui/dropTarget';
import { FilesPreview } from './filesPreviewList';
import { useFileStates } from '@renderer/helpers/useFileStates';
import { useConvertHeic } from '@renderer/helpers/useConvertHeic';
import { fileBase64Async, supportedImageTypes, validHeicPath } from '@renderer/helpers/file';

export const DropFileTarget: React.FC = () => {
  const wrapperRef = useRef<any>(null);
  const fileRef = useRef<any>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const { files, addFile, removeFile, setFileStatus } = useFileStates();
  const { convertHeic } = useConvertHeic(setFileStatus);

  const onDragEnter = () => setDragActive(true);
  const onDragLeave = () => setDragActive(false);
  const onDrop = () => setDragActive(false);

  const onFileDrop = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
        return;
    }
    await Promise.all(Array.from(e.target.files).map(async (file) => {
      const src = supportedImageTypes(file.path) ? await fileBase64Async(file) : picture;
      if (!validHeicPath(file.path)) {
        const src = await fileBase64Async(file);
        addFile({ path: file.path, src, status: 'Error', error: 'Only .HEIC files are allowed' });
        return;
      }
      addFile({ path: file.path, src: src.replace('data:application/octet-stream', 'data:image/heic'), status: 'Converting' });
      convertHeic(file.path);
    }));

    e.target.value = '';
  };

  return (
    <>
      <DropWrapper
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        $dragActive={dragActive}
      >
        <DropFileLabel>
          <img src={picture} alt="" />
          <p>Drop your HEIC files here</p>
        </DropFileLabel>
        <DropFileInput ref={fileRef} type='file' onChange={onFileDrop} accept="image/heic" multiple={true} />
      </DropWrapper>
      <BrowseLink onClick={() => fileRef.current.click()}>Or browse for files</BrowseLink>
      <FilesPreview files={files} onRemove={(file) => removeFile(file.path)}/>
    </>
  )
};
