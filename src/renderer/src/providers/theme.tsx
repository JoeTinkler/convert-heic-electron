import { darkTheme, lightTheme } from "@renderer/helpers/theme";
import { PropsWithChildren, useState, useCallback } from "react";
import { createContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export type ThemeContextData = {
  theme: Theme,
  setTheme: (name: ThemeName) => void
};

export const themeContext = createContext<ThemeContextData>({
  theme: lightTheme,
  setTheme: () => {},
});

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const defaultTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(defaultTheme === 'dark' ? darkTheme : lightTheme);

  const setThemeByName = useCallback((name: ThemeName) => {
    switch (name) {
      case 'light':
        localStorage.setItem('theme', 'light');
        setTheme(lightTheme);
        break;
      case 'dark':
        localStorage.setItem('theme', 'dark');
        setTheme(darkTheme);
        break;
      default:
        throw new Error(`Unknown theme name ${name}`);
    }
  }, []);

  return (
  <themeContext.Provider value={{ theme, setTheme: setThemeByName }}>
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  </themeContext.Provider>
  );
};