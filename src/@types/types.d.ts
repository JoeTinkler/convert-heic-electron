type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Colour = RGB | RGBA | HEX;

type ThemeName = 'light' | 'dark';

type Theme = {
  name: ThemeName;
  background: Colour;
  text: {
    normal: Colour;
    highlight: Colour;
  },
  item: {
    background: Colour;
    text: Colour;
    pending: Colour;
    success: Colour;
    error: Colour;
    remove: Colour;
  }
}

type SelectOption = {
  value: string,
  label: string
};

type FileState = {
  path: string;
  outputType: OutputType;
  status: FileStatus;
  src: string;
  error?: string;
}

type FileStatus = 'Converting' | 'Converted' | 'Error';

type OutputType = 'JPEG' | 'PNG';

type ConvertHeicEvent = {
  path: string;
  outputType: OutputType;
}

type ConvertedHeicEvent = {
  path: string;
  src: string;
}

type ConvertHeicErrorEvent = {
  path: string;
  error: string;
}