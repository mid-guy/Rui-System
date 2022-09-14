import { createContext, useContext } from "react";
import { defaultTheme } from "./createTheme";


export const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children, theme }: any) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};


export default ThemeProvider