import { readFile, writeFile } from 'fs';

export const readFileAsync = (path: string): Promise<any> => {
  return new Promise((resolve, error) => {
    readFile(path, (err, data) => {
      if (err) {
        error(err);
      }
      resolve(data);
    })
  })
}

export const writeFileAsync = (path: string, data: any) => {
  return new Promise<void>((resolve, error) => {
    writeFile(path, data, (err) => {
      if (err) {
        error(err);
      }
      resolve();
    })
  })
}