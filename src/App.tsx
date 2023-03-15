/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import ButtonBase from "./packages/ButtonBase";
function App() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState("");
  const [options, setOptions] = useState<any[]>([]);
  const [isUpdatingOptions, setUpdatingOptions] = useState<boolean>(false);
  const withLoading = (callback: any) => {
    return async (e: any) => {
      setLoading(true);
      await delay(1000);
      await callback(e);
      setUpdatingOptions(true);
      setLoading(false);
    };
  };
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function onClick(e: any, number: number) {
    console.log(e, number);
  }
  function getBook(value: any) {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        const result = mapValue(value, json);
        setOptions(result);
      });
  }
  function mapValue(target: string, source: any[]) {
    return source.filter((item: any) => item.title.includes(target));
  }

  function onCompleteChangeOptions() {
    console.log("COMPLETED-CHANGING-CONTENT");
    setUpdatingOptions(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <div style={{ display: "flex", gap: 20, flexDirection: "column" }}>
            <div style={{ display: "flex", gap: 10 }}>
              <ButtonBase variant="text" size="lg" disableElevation>
                Button Text Primary
              </ButtonBase>
              <ButtonBase
                variant="text"
                size="lg"
                color="secondary"
                disableElevation
              >
                Button Text Secondary
              </ButtonBase>
              <ButtonBase
                variant="text"
                size="lg"
                color="ternary"
                disableElevation
              >
                Button Text Ternary
              </ButtonBase>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <ButtonBase
                variant="container"
                size="lg"
                background="primary"
                disableElevation
              >
                Button Container Primary
              </ButtonBase>
              <ButtonBase
                variant="container"
                size="lg"
                background="secondary"
                disableElevation
              >
                Button Container Secondary
              </ButtonBase>
              <ButtonBase
                variant="container"
                size="lg"
                background="ternary"
                disableElevation
              >
                Button Container Ternary
              </ButtonBase>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <ButtonBase
                variant="outlined"
                size="lg"
                outlinedTheme="primary"
                disableElevation
              >
                Button Outlined Primary
              </ButtonBase>
              <ButtonBase
                variant="outlined"
                size="lg"
                outlinedTheme="secondary"
                disableElevation
              >
                Button Outlined Secondary
              </ButtonBase>
              <ButtonBase
                variant="outlined"
                size="lg"
                outlinedTheme="ternary"
                disableElevation
              >
                Button Outlined Ternary
              </ButtonBase>
            </div>
          </div>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
