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
          <div>
          <ButtonBase variant="text" animationframe="ripple" size="xxl">
            This is Button Ripple
          </ButtonBase>
          </div>
          {/* <ButtonBase
            variant={"container"}
            animationframe="scale"
            size="lg"
            style={{ marginTop: 10 }}
          >
            This is Button Scale
          </ButtonBase> */}
          {/* <LocalButton style={{ marginTop: 10 }}>
            This is Local Button
          </LocalButton> */}
        </ThemeProvider>
        {/* <Button variant="contained">THIS IS A BUTTON</Button> */}
      </header>
    </div>
  );
}

export default App;
