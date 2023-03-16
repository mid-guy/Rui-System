/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import Stack from "./packages/Stack/Stack";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <Stack>
            <div>123</div>
            <div>123</div>
            <div>123</div>
          </Stack>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
