import { ThemeProps } from "./themeProvider";
import createTheme from "./createTheme";

declare module "../components/ButtonBase/ButtonBase" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

export default createTheme({
  components: {
    button: {
      variants: {
        dashed: (theme: ThemeProps) => `
          
        `,
      },
    },
  },
});
