/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { lazy } from "react";
import theme from "./core-theme/theme";
import ThemeProvider from "./core-theme/themeProvider";
import { Button } from "@mui/material";
// import ButtonBase from "./components/ButtonBase/ButtonBase";
const ButtonBase = lazy(() => import("./components/ButtonBase/ButtonBase"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <ButtonBase variant="container" animationframe="ripple" fullWidth disabled>
            THIS IS A BUTTON
          </ButtonBase>
        </ThemeProvider>
        {/* <Button variant="contained" disabled>THIS IS A BUTTON</Button> */}
      </header>
    </div>
  );
}

export default App;
