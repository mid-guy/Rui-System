/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import ButtonBase from "./packages/ButtonBase";
function App() {
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <div style={{ display: "flex", gap: 10 }}>
            <ButtonBase
              variant="container"
              background="primary"
              onClick={() => setState(true)}
            >
              Module color 1
            </ButtonBase>
          </div>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
