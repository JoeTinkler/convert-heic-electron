import { useEffect } from 'react';

const electron = window.electron.ipcRenderer;

export const useConvertHeic = (setFileStatus: (file: Partial<FileState>) => void) => {
  useEffect(() => {
    electron.on('convertedHeic', (_, { path, src }: ConvertedHeicEvent) => {
      setFileStatus({ path, status: 'Converted', src }); 
    });

    electron.on('convertedHeicError', (_, { path, error }: ConvertHeicErrorEvent) => {
      setFileStatus({ path, status: 'Error', error });
    });

    return () => {
      electron.removeAllListeners('convertedHeic');
      electron.removeAllListeners('convertedHeicError');
    };
  }, [setFileStatus]);

  const convertHeic = async (params: ConvertHeicEvent) => {
    electron.send('convertToHeic', params);
  };

  return { convertHeic };

};