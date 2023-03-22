import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import Radio from "./packages/Radio/Radio";
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
            <Radio />
          </Stack>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
