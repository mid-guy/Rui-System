/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { lazy } from "react";
import theme from "./core-theme/theme";
import ThemeProvider from "./core-theme/themeProvider";
import { Button } from "@mui/material";
import ButtonBase from "./components/ButtonBase/ButtonBase";
import LocalButton from "./components/LocalButton/LocalButton";
// const ButtonBase = lazy(() => import("./components/ButtonBase/ButtonBase"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          {/* <ButtonBase variant="container" animationframe="ripple" size="lg">
            This is Button Ripple
          </ButtonBase> */}
          <LocalButton>
            This is Local Button
          </LocalButton>
          {/* <ButtonBase variant="container" animationframe="scale" size="lg" style={{ marginTop: 10 }}>
            This is Button Scale
          </ButtonBase> */}
        </ThemeProvider>
        {/* <Button variant="contained" disabled>THIS IS A BUTTON</Button> */}
      </header>
    </div>
  );
}

export default App;
