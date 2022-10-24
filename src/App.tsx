/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { lazy, useState } from "react";
import theme from "./core-theme/theme";
import { Button } from "@mui/material";
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
        <ThemeProvider theme={theme}>
          <ButtonBase variant="container">This is Button Base</ButtonBase>
        </ThemeProvider>
        <Button variant="contained">This is Button Material UI</Button>
        {/* <LocalButton>This is MakeStyles Button</LocalButton>
          <WithStylesButton>This is WithStylesButton</WithStylesButton> */}
      </header>
    </div>
  );
}

export default App;
