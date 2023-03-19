/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import Checkbox from "./packages/Checkbox";
import Stack from "./packages/Stack/Stack";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <Stack
            direction={{
              sm: "column",
              md: "column",
            }}
            alignItems="flex-start"
          >
            <Checkbox value={1} name="check-box-1" label={"this is one"} />
          </Stack>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
