import { FilePreview } from "./filePreview";
import { DropFilePreview } from "./ui/filePreview";

type PropTypes = {
  files: FileState[];
  onRemove: (file: FileState) => void;
}

export const FilesPreview: React.FC<PropTypes> = ({ files, onRemove }) => {
  return (
    <DropFilePreview>
      {files.map((item, index) => (<FilePreview key={index} file={item} onRemove={onRemove}/>))}
    </DropFilePreview>
  );
};