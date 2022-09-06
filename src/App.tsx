import "./App.css";
import { createContext, lazy } from "react";
import theme from "./components/theme/theme";
const ButtonBase = lazy(() => import("./components/ButtonBase/ButtonBase"));

export const ThemeContext = createContext({});

const ThemeProvider = ({ children, theme }: any) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

function App() {
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
