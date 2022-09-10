import "./App.css";
import { createContext, lazy, useContext } from "react";
import theme from "./components/theme/theme";
import { defaultTheme } from "./components/theme/createTheme";
const ButtonBase = lazy(() => import("./components/ButtonBase/ButtonBase"));

export const ThemeContext = createContext(defaultTheme);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return theme;
};

const ThemeProvider = ({ children, theme }: any) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

function App() {
  console.log({ theme });
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <ButtonBase variant="container">
            <label>Dasher</label>
          </ButtonBase>
          <ButtonBase variant="container">
            <label>OKR</label>
          </ButtonBase>
          <ButtonBase variant="container">
            <label>OKE</label>
          </ButtonBase>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
