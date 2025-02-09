import { useEffect } from 'react';

const electron = window.electron.ipcRenderer;

export const useConvertHeic = (setFileStatus: (file: Partial<FileState>) => void) => {
  useEffect(() => {
    electron.on('convertedHeic', (event, path: string, src: string) => {
      console.log(`convertedHeic`, { event, path, src });
      setFileStatus({ path, status: 'Converted', src }); 
    });

    electron.on('convertedHeicError', (event, path: string, error: string) => {
      console.log(`convertedHeicError`, { event, path, error });
      setFileStatus({ path, status: 'Error', error });
    });

    return () => {
      electron.removeAllListeners('convertedHeic');
      electron.removeAllListeners('convertedHeicError');
    };
  }, [setFileStatus]);

  const convertHeic = async (path: string) => {
    console.log('sending convertToHeic', path);
    electron.send('convertToHeic', path);
  };

  return { convertHeic };

};