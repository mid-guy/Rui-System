import "./App.css";
import theme from "./core-theme/theme";
import ThemeProvider from "./core/theme/themeProvider";
import Radio from "./packages/Radio/Radio";
import RadioGroup from "./packages/RadioGroup";
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
            <RadioGroup name="radio">
              <Radio label="Number 1" />
              <Radio label="Number 2" />
              <Radio label="Number 3" />
              <Radio label="Number 4" disabled />
            </RadioGroup>
          </Stack>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
