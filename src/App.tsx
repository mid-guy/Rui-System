/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { lazy } from "react";
import theme from "./core-theme/theme";
import ThemeProvider from "./core-theme/themeProvider";
import Tooltips from "./components/Tooltips/Tooltips";
import TooltipsCustom from "./components/TooltipsCustom/TooltipsCustom";
const ButtonBase = lazy(() => import("./components/ButtonBase/ButtonBase"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          {/* <ButtonBase variant="container" animationframe="ripple">
            <label>Dasher</label>
          </ButtonBase> */}
          <Tooltips currentID="1"/>
          <Tooltips currentID="2"/>
          {/* <TooltipsCustom currentID="2" />
          <TooltipsCustom currentID="2" /> */}
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
