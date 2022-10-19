import createTheme from "../core/theme/createTheme";
import { ThemeProps } from "../core/theme/themeProvider";
declare module "../components/ButtonBase/ButtonBase" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
    ghost: true;
  }
}
let theme = createTheme() as ThemeProps;

export default theme;
