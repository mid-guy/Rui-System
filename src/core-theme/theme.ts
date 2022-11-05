import { grey, red } from "../core/colors/colors";
import createTheme from "../core/theme/createTheme";
import { ThemeProps } from "../core/theme/themeProvider";

let defaultTheme = createTheme() as ThemeProps;

const overridePaletteTheme = createTheme(defaultTheme, {
  palette: {
    ghost: {
      main: red[50],
      contrastText: `#FFF`,
    },
    innerGhost: {
      main: grey[100],
      contrastText: `#FFF`,
    },
  },
});

const theme = createTheme(overridePaletteTheme, {
  components: {
    button: {
      variants: {
        // ghost: (theme: ThemeProps) => `
        //   color: ${theme.palette.ghost.main};
        //   box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
        // `,
        // innerGhost: (theme: ThemeProps) => `
        //   color: ${theme.palette.innerGhost.main};
        //   box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
        // `,
      },
    },
  },
});

export default theme;
