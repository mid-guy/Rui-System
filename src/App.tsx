/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { lazy, useState } from "react";
import theme from "./core-theme/theme";
import ButtonBase from "./packages/ButtonBase/ButtonBase";
import LocalButton from "./packages/LocalButton/LocalButton";
import ThemeProvider from "./core/theme/themeProvider";
import WithStylesButton from "./packages/WithStylesButton/WithStylesButton";
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
          <div style={{ display: "flex", gap: 10 }}>
            <ButtonBase variant="container" background="primary">
              Module color 1
            </ButtonBase>

            <ButtonBase variant="container" background="secondary">
              Module color 2
            </ButtonBase>

            <ButtonBase variant="container" background="ternary">
              Module color 3
            </ButtonBase>
          </div>
        </ThemeProvider>

        {/* <LocalButton size="lg" className="mb-10">
          This is MakeStyles Button
        </LocalButton>

        <WithStylesButton className="mb-10">
          This is WithStylesButton
        </WithStylesButton> */}
      </header>
    </div>
  );
}

export default App;
