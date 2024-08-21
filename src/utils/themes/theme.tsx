import { StyledEngineProvider, Theme, ThemeProvider } from "@mui/material";
import { createContext, useState } from "react";
import { themeCreator } from "./base";

export const ThemeContext = createContext((_themeName: string): void => {});

interface ThemeProps {
  children?: React.ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProps> = ({ children }) => {
  const curThemeName =
    typeof window !== 'undefined'
      ? localStorage.getItem('appTheme') || 'PureLightTheme'
      : 'PureLightTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme: Theme = themeCreator(themeName);
  const setThemeName = (themename: string): void => {
    localStorage.setItem('appTheme', themename);
    _setThemeName(themename);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeContext.Provider>
    </StyledEngineProvider>
  );
}

export default ThemeProviderWrapper;