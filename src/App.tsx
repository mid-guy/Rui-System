/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import Span from "./demo/Span";
import Autocomplete from "./packages/Autocomplete";
import Collapse from "./packages/Collapse";
import {
  useLocalStateCollapseContext,
  useScopeContext,
} from "./packages/Collapse/Collapse";
import ConditionalRender from "./packages/ConditionalRender";
function App() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState("");
  const [options, setOptions] = useState<any[]>([]);
  const withLoading = (callback: any) => {
    return async (e: any) => {
      setLoading(true);
      await delay(1000);
      await callback(e);
      setLoading(false);
    };
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function getBook(value: any) {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        const result = mapValue(value, json);
        setOptions(result);
      });
  }
  //
  function mapValue(target: string, source: any[]) {
    return source.filter((item: any) => item.title.includes(target));
  }

  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <div style={{ display: "flex", gap: 10 }}>
            <Collapse root={true} labelComponent={<LabelComponent />}>
              <WrapLoader>
                <div style={{ color: "black" }}>level 1</div>
                <div style={{ color: "black" }}>level 1</div>
                <div style={{ color: "black" }}>level 1</div>
                <div style={{ color: "black" }}>level 1</div>
                <div style={{ color: "black" }}>level 1</div>
                <Collapse labelComponent={<LabelComponent />}>
                  <WrapLoader>
                    <div style={{ color: "black" }}>level 2</div>
                    <div style={{ color: "black" }}>level 2</div>
                    <div style={{ color: "black" }}>level 2</div>
                    <Collapse labelComponent={<LabelComponent />}>
                      <WrapLoader>
                        <div style={{ color: "black" }}>level 3</div>
                        <div style={{ color: "black" }}>level 3</div>
                        <div style={{ color: "black" }}>level 3</div>
                        <div style={{ color: "black" }}>level 3</div>
                        <Collapse labelComponent={<LabelComponent />}>
                          <WrapLoader>
                            <div style={{ color: "black" }}>level 4</div>
                            <div style={{ color: "black" }}>level 4</div>
                          </WrapLoader>
                        </Collapse>
                      </WrapLoader>
                    </Collapse>
                  </WrapLoader>
                </Collapse>
              </WrapLoader>
            </Collapse>
          </div>
        </ThemeProvider>
      </header>
    </div>
  );
}

const LabelComponent = () => {
  const { onToggle, isOpen } = useLocalStateCollapseContext();
  console.log(onToggle);
  return (
    <button onClick={() => onToggle()}>{isOpen ? "Close" : "Open"}</button>
  );
};

const WrapLoader = ({ children }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "green",
      }}
    >
      {children}
    </div>
  );
};

export default App;
