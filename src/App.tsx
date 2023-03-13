/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, useState } from "react";
import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import Collapse from "./packages/Collapse";
import { useLocalStateCollapseContext } from "./packages/Collapse/Collapse";
import { MinusSquareO, PlusSquareO } from "./packages/Collapse/Icon/Icon";
import ConditionalRender from "./packages/ConditionalRender";
function App() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState("");
  const [options, setOptions] = useState<any[]>([]);
  const withLoading = (callback: any) => {
    return async (e: any) => {
      setLoading(true);
      await delay(1500);
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              width: "100%",
            }}
          >
            <Collapse
              root={true}
              labelComponent={<LabelComponent />}
              onFetchData={withLoading(() => "a")}
              isLoading={isLoading}
            >
              <WrapLoader>
                <div style={{ color: "black" }}>level 1.1</div>
                <div style={{ color: "black" }}>level 1.2</div>
                <div style={{ color: "black" }}>level 1.3</div>
                <div style={{ color: "black" }}>level 1.4</div>
                <Collapse labelComponent={<LabelComponent />}>
                  <WrapLoader>
                    <div style={{ color: "black" }}>level 2.1</div>
                    <div style={{ color: "black" }}>level 2.2</div>
                    <Collapse labelComponent={<LabelComponent />}>
                      <WrapLoader>
                        <div style={{ color: "black" }}>level 3.1</div>
                        <div style={{ color: "black" }}>level 3.2</div>
                      </WrapLoader>
                    </Collapse>
                    <Collapse labelComponent={<LabelComponent />}>
                      <WrapLoader>
                        <div style={{ color: "black" }}>level 3.1</div>
                        <div style={{ color: "black" }}>level 3.2</div>
                        <div style={{ color: "black" }}>level 3.3</div>
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
  return (
    <Fragment>
      <div
        style={{ width: 14, height: 14, cursor: "pointer", padding: 5 }}
        onClick={() => onToggle()}
      >
        {isOpen ? <PlusSquareO /> : <MinusSquareO />}
      </div>
    </Fragment>
  );
};

const WrapLoader = ({ children }: any) => {
  const { isVisible, isLoading } = useLocalStateCollapseContext();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: 25,
        fontSize: 20,
        width: "100%",
      }}
    >
      <ConditionalRender conditional={isVisible}>
        <ConditionalRender
          conditional={!isLoading}
          fallback={<div style={{ color: "black" }}>Loading 1</div>}
        >
          {children}
        </ConditionalRender>
      </ConditionalRender>
    </div>
  );
};

export default App;
