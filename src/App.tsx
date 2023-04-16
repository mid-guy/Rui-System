import "./App.css";
import theme from "./core-theme/theme";
import useLoadingOptions from "./core/hooks/useLoadingOptions";
import ThemeProvider from "./core/theme/themeProvider";
import Span from "./demo/Span";
import Select from "./packages/Select";
import Stack from "./packages/Stack";
function App() {
  const { withLoadingOptions, isLoading } = useLoadingOptions();
  function getBook() {
    return fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {});
  }

  function onFocus() {
    return withLoadingOptions(getBook);
  }
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
            <Select
              isLoading={isLoading}
              disabled={isLoading}
              onFocus={onFocus}
            >
              <Span>123</Span>
              <Span>123</Span>
              <Span>123</Span>
              <Span>123</Span>
              <Span>123</Span>
            </Select>
          </Stack>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
