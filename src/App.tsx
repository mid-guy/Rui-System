/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { lazy } from "react";
import theme from "./core-theme/theme";
import ThemeProvider from "./core-theme/themeProvider";
import Tooltips from "./components/Tooltips/Tooltips";
import TooltipsCustom from "./components/TooltipsCustom/TooltipsCustom";
import InputBase from "./components/InputBase/InputBase";
const ButtonBase = lazy(() => import("./components/ButtonBase/ButtonBase"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          {/* <ButtonBase variant="container" animationframe="ripple">
            <label>Dasher</label>
          </ButtonBase> */}
          <InputBase>
            <div>Menu item</div>
            <div>Menu item</div>
            <div>Menu item</div>
            <div>Menu item</div>
          </InputBase>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
