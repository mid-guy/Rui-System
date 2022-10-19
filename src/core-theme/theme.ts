import { ThemeProps } from "./themeProvider";
import createTheme from "./createTheme";
import { css, SerializedStyles } from "@emotion/react";

declare module "../components/ButtonBase/ButtonBase" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
    ghost: true;
  }
}
let theme = createTheme() as ThemeProps;
// theme = createTheme({
//   components: {
//     button: {
//       variants: {
//         dashed: (theme: ThemeProps) => `
//         background-color: blue;
//         color: red;
//         `,
//         ghost: (theme: ThemeProps) => `
//         background-color: blue;
//         color: red;
//       `,
//       },
//     },
//   },
// });
// theme = createTheme(theme, {
//   components: {
//     button: {
//       variants: {
//         container: (theme: ThemeProps) => `
//         background-color: blue;
//         color: red;
//         `,
//       },
//     },
//   },
// });

export default theme;
