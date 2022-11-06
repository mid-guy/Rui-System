/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { lazy, useState } from "react";
import theme from "./core-theme/theme";
// import { Button } from "@mui/material";
// import { Button } from "@material-ui/core";
import ButtonBase from "./packages/ButtonBase/ButtonBase";
import LocalButton from "./packages/LocalButton/LocalButton";
import ThemeProvider from "./core/theme/themeProvider";
import WithStylesButton from "./packages/WithStylesButton/WithStylesButton";
// const ButtonBase = lazy(() => import("./components/ButtonBase/ButtonBase"));
function App() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const withLoading = (callback: any) => {
    return async (e: any) => {
      setLoading(true);
      await callback(e);
      setLoading(false);
    };
  };
  function onClick(e: any, number: number) {
    console.log(e, number);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <ThemeProvider theme={theme}></ThemeProvider> */}
        {/* <Button variant="contained">This is Button Material UI</Button> */}

        {/* <LocalButton size="lg" className="mb-10">
          This is MakeStyles Button
        </LocalButton>

        <WithStylesButton className="mb-10">
          This is WithStylesButton
        </WithStylesButton> */}

        {/* <ButtonBase variant="container" size="lg">
          This is Button Base
        </ButtonBase> */}
        {/* <Button variant="contained" color="primary">
          This is Button Material UI v4
        </Button> */}
      </header>
    </div>
  );
}

export default App;
