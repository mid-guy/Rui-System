import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import Chip from "./packages/Chip/Chip";
import Stack from "./packages/Stack/Stack";
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
            <Chip label="This is Chip" />
            <Chip label="This is Chip" />
          </Stack>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
