import "./App.css";
import { lazy } from "react";
import theme from "./components/core-theme/theme";
import ThemeProvider from "./components/core-theme/themeProvider";
const ButtonBase = lazy(() => import("./components/ButtonBase/ButtonBase"));

function App() {
  console.log({ theme });
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <ButtonBase variant="container">
            <label>Dasher</label>
          </ButtonBase>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
