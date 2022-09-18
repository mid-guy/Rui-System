import { createContext, useContext, useMemo } from "react";
import { defaultTheme } from "./createTheme";

export const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children, theme }: any) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _theme = useMemo(() => theme, [])
  return (
    <ThemeContext.Provider value={_theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};


export default ThemeProvider