/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { useState } from "react";
import Select from "./packages/Select";
import ConditionalRender from "./packages/ConditionalRender";
import Span from "./demo/Span";
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
  function getBook(e: any) {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        const result = mapValue(e.target.value, json);
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
      <div className="App-content">
        <Select
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
        </Select>
      </div>
    </div>
  );
}
export default App;
