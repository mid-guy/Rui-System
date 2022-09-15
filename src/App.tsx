import "./App.css";
import { lazy } from "react";
import theme from "./core-theme/theme";
import ThemeProvider from "./core-theme/themeProvider";
const ButtonBase = lazy(() => import("./components/ButtonBase/ButtonBase"));

function App() {
  console.log({ theme });
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <ButtonBase variant="container" animationframe="scale">
            <label>Dasher</label>
          </ButtonBase>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
