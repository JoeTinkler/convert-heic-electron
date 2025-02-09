import React, { useRef, useState } from 'react';
import { DropWrapper, DropFileLabel, DropFileInput, BrowseLink, OutputTypeSelectWrapper } from './ui/dropTarget';
import { FilesPreview } from './filesPreviewList';
import { useFileStates } from '@renderer/helpers/useFileStates';
import { Select } from './select';
import { Picture } from './ui/picture';
import { useFileDrop } from '@renderer/helpers/useFileDrop';

const OUTPUT_OPTIONS: SelectOption[] = [
  { value: 'JPEG', label: 'JPEG' },
  { value: 'PNG', label: 'PNG' }
];

export const DropFileTarget: React.FC = () => {
  const wrapperRef = useRef<any>(null);
  const fileRef = useRef<any>(null);
  const [outputType, setOutputType] = useState<OutputType>(localStorage.getItem('outputType') as OutputType ?? 'JPEG');
  const { files, addFile, removeFile, setFileStatus } = useFileStates();
  const { dragActive, onDragEnter, onDragLeave, onDrop, onFileDrop } = useFileDrop(outputType, addFile, setFileStatus);

  const onOutputTypeChange = (value: OutputType) => {
    setOutputType(value);
    localStorage.setItem('outputType', value);
  };

  return (
    <>
      <OutputTypeSelectWrapper>
        <Select value={outputType} options={OUTPUT_OPTIONS} onChange={(value) => onOutputTypeChange(value as OutputType)} />
      </OutputTypeSelectWrapper>
      <DropWrapper
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        $dragActive={dragActive}
      >
        <DropFileLabel $dragActive={dragActive}>
          <Picture highlight={dragActive} />
          <p>Drop your HEIC files here</p>
        </DropFileLabel>
        <DropFileInput ref={fileRef} type='file' onChange={onFileDrop} accept="image/heic" multiple={true} />
      </DropWrapper>
      <BrowseLink onClick={() => fileRef.current.click()}>Or browse for files</BrowseLink>
      <FilesPreview files={files} onRemove={(file) => removeFile(file.path)}/>
    </>
  )
};
