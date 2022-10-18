/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { lazy, useState } from "react";
import theme from "./core-theme/theme";
import ThemeProvider from "./core-theme/themeProvider";
import { Button } from "@mui/material";
import ButtonBase from "./components/ButtonBase/ButtonBase";
import LocalButton from "./components/LocalButton/LocalButton";
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
          <div>
            <ButtonBase
              onClick={withLoading((e: any) => console.log(e))}
              className="ml-10"
              variant="container"
              outlinedTheme="primary"
              animationframe="ripple"
              size="sm"
            >
              This is Button Ripple
            </ButtonBase>
          </div>
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
        </ThemeProvider>
        {/* <Button variant="contained">THIS IS A BUTTON</Button> */}
      </header>
    </div>
  );
}

export default App;
