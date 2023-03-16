/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import Autocomplete from "./packages/Autocomplete";
import ButtonBase from "./packages/ButtonBase";
import ConditionalRender from "./packages/ConditionalRender";
import Tooltips from "./packages/Tooltips";
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
          <div style={{ display: "flex", gap: 10 }}>
            <Tooltips content={<span>This is tooltips</span>}>
              <ButtonBase size="lg" disableElevation>
                Button
              </ButtonBase>
            </Tooltips>
          </div>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
