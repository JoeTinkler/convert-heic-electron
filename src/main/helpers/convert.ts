import convert from 'heic-convert';
import { readFileAsync, writeFileAsync } from './file';

export const convertHeicToJpeg = async (path: string): Promise<ArrayBuffer> => {
  const inputBuffer = await readFileAsync(path);
  const outputBuffer = await convert({
    buffer: inputBuffer, // the HEIC file buffer
    format: 'JPEG',      // output format
    quality: 1           // the jpeg compression quality, between 0 and 1
  });

  await writeFileAsync(`${path.substring(0, path.length-4)}jpeg`, outputBuffer);
  return outputBuffer;
}