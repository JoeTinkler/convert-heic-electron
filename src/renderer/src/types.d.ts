type FileState = {
  path: string;
  status: FileStatus;
  src: string;
  error?: string;
}

type FileStatus = 'Converting' | 'Converted' | 'Error';