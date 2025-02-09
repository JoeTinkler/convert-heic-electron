import { DropFilePreviewItem, DropFilePreviewItemAction, DropFilePreviewItemInfo, FilePreviewImage, FilePreviewStatus } from "./ui/filePreview";

type PropTypes = {
  file: FileState;
  onRemove: (file: FileState) => void;
}

export const FilePreview: React.FC<PropTypes> = ({ file, onRemove }) => (
  <DropFilePreviewItem>
    <DropFilePreviewItemInfo>
      <FilePreviewImage src={file.src} alt={file.path} />
      <FilePreviewStatus $status={file.status} title={file.error}>{file.status}</FilePreviewStatus>
    </DropFilePreviewItemInfo>
    <DropFilePreviewItemAction onClick={() => onRemove(file)}>x</DropFilePreviewItemAction>
  </DropFilePreviewItem>
)