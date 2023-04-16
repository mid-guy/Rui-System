import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import Select from "./packages/Select";
import Stack from "./packages/Stack";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={theme}>
          <Stack
            direction={{
              xs: "column",
              sm: "column",
              md: "column",
            }}
            alignItems="flex-start"
          >
            <Select />
          </Stack>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
