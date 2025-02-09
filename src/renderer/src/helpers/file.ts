export const fileBase64Async = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result as string)
    };
    reader.onerror = reject;
  });
};

export const validHeicPath = (path: string) => path.toLowerCase().endsWith('.heic');

export const supportedImageTypes = (path: string) => ['.jpg', '.jpeg', '.png'].some((type) => path.toLocaleLowerCase().endsWith(type));
