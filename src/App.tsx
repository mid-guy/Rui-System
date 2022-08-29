import "./App.css";
import { lazy } from "react";
const ButtonBase = lazy(() => import("./components/ButtonBase/ButtonBase"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonBase variant="outlined" background={"primary"} size="sm">
          <label>Hi hi</label>
        </ButtonBase>
      </header>
    </div>
  );
}

export default App;
