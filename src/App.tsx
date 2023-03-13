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
              width: 300,
            }}
          >
            <Collapse
              root={true}
              labelComponent={<LabelComponent>Header Level 1</LabelComponent>}
              onFetchData={withLoading(() => "a")}
              isLoading={isLoading}
            >
              <WrapLoader>
                <Span>level 1.1</Span>
                <Span>level 1.2</Span>
                <Span>level 1.3</Span>
                <Span>level 1.4</Span>
                <Span>level 1.5</Span>
                <Collapse
                  labelComponent={
                    <LabelComponent>Header Level 2</LabelComponent>
                  }
                >
                  <WrapLoader>
                    <Span>level 2.1</Span>
                    <Span>level 2.2</Span>
                    <Collapse
                      labelComponent={
                        <LabelComponent>Header Level 3</LabelComponent>
                      }
                    >
                      <WrapLoader>
                        <Span>level 3.1</Span>
                        <Span>level 3.2</Span>
                      </WrapLoader>
                    </Collapse>
                    <Collapse
                      labelComponent={
                        <LabelComponent>Header Level 3</LabelComponent>
                      }
                    >
                      <WrapLoader>
                        <Span>level 3.1</Span>
                        <Span>level 3.2</Span>
                        <Span>level 3.3</Span>
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

const LabelComponent = ({ children }: any) => {
  const { onToggle, isOpen } = useLocalStateCollapseContext();
  return (
    <Fragment>
      <div
        onClick={() => onToggle()}
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          padding: "8px 0",
        }}
      >
        {isOpen ? (
          <MinusSquareO
            style={{
              width: 14,
              height: 14,
              cursor: "pointer",
              verticalAlign: "middle",
            }}
          />
        ) : (
          <PlusSquareO
            style={{
              width: 14,
              height: 14,
              cursor: "pointer",
              verticalAlign: "middle",
            }}
          />
        )}
        <span style={{ color: "black", fontSize: 16 }}>{children}</span>
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
        alignItems: "flex-start",
        gap: 2,
        marginLeft: 25,
        fontSize: 16,
        width: "100%",
        color: "black",
      }}
    >
      <ConditionalRender conditional={isVisible}>
        <ConditionalRender
          conditional={!isLoading}
          fallback={<Span>Loading</Span>}
        >
          {children}
        </ConditionalRender>
      </ConditionalRender>
    </div>
  );
};

function Span({ children }: any) {
  return <span>{children}</span>;
}

export default App;
