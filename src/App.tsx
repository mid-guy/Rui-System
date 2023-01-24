/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { useState } from "react";
import MomentumScrollContainer from "./packages/MomentumScrollContainer";
function App() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState("");
  const [options, setOptions] = useState<any[]>([]);
  const withLoading = (callback: any) => {
    return async (e: any) => {
      setLoading(true);
      await delay(2000);
      await callback(e);
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

  return (
    <div className="App">
      <MomentumScrollContainer>
        <div className="section one">Section One</div>
        <div className="section two">Section Two</div>
        <div id="three" className="section three">
          Section Three
        </div>
        <div className="section four">Section Four</div>
      </MomentumScrollContainer>
    </div>
  );
}
export default App;
