import convert from 'heic-convert';
import { readFileAsync, writeFileAsync } from './file';

export const convertHeic = async (path: string, outputType: OutputType): Promise<ArrayBuffer> => {
  const inputBuffer = await readFileAsync(path);
  const outputBuffer = await convert({
    buffer: inputBuffer,
    format: outputType,
    quality: 1
  });

  await writeFileAsync(`${path.substring(0, path.length-4)}${outputType.toLowerCase()}`, outputBuffer);
  return outputBuffer;
}