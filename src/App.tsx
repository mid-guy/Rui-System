/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import Span from "./demo/Span";
import Autocomplete from "./packages/Autocomplete";
import Collapse from "./packages/Collapse";
import ConditionalRender from "./packages/ConditionalRender";
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
            {/* <Autocomplete
              onLoadOptions={withLoading(getBook)}
              onChange={(e) => setState(e.target.value)}
              isLoadingOptions={isLoading}
              isUpdatingOptions={isUpdatingOptions}
              onCompleteChangeOptions={onCompleteChangeOptions}
              value={state}
            >
              <ConditionalRender
                conditional={options && options.length > 0}
                fallback={<Span>No Value</Span>}
              >
                {options.map((option: any) => (
                  <Span key={option.id}>{option.title}</Span>
                ))}
              </ConditionalRender>
            </Autocomplete> */}
            <Collapse root={true}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "green",
                }}
              >
                <div style={{ color: "black" }}>level 1</div>
                <div style={{ color: "black" }}>level 1</div>
                <div style={{ color: "black" }}>level 1</div>
                <div style={{ color: "black" }}>level 1</div>
                <div style={{ color: "black" }}>level 1</div>
                <Collapse>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      background: "green",
                    }}
                  >
                    <div style={{ color: "black" }}>level 2</div>
                    <div style={{ color: "black" }}>level 2</div>
                    <div style={{ color: "black" }}>level 2</div>
                    <Collapse>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          background: "green",
                        }}
                      >
                        <div style={{ color: "black" }}>level 3</div>
                      </div>
                    </Collapse>
                  </div>
                </Collapse>
              </div>
            </Collapse>
          </div>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
