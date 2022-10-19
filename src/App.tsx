/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { lazy, useState } from "react";
import theme from "./core-theme/theme";
import { Button } from "@mui/material";
import ButtonBase from "./components/ButtonBase/ButtonBase";
import LocalButton from "./components/LocalButton/LocalButton";
import ThemeProvider from "./core/theme/themeProvider";
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
          {/* <LocalButton style={{ marginTop: 10 }}>
            This is Local Button
          </LocalButton> */}
          {/* <ButtonBase
            variant={"container"}
            animationframe="scale"
            size="lg"
            style={{ marginTop: 10 }}
          >
            This is Button Scale
          </ButtonBase> */}
          <ButtonBase
            onClick={withLoading((e: any) => console.log(e))}
            variant="container"
            size={"lg"}
          >
            This is Button Ripple
          </ButtonBase>
        </ThemeProvider>
        {/* <Button variant="contained">THIS IS A BUTTON</Button> */}
      </header>
    </div>
  );
}

export default App;
