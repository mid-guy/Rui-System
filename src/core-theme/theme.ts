import { ThemeProps } from "./themeProvider";
import createTheme from "./createTheme";
import { css, SerializedStyles } from "@emotion/react";

declare module "../components/ButtonBase/ButtonBase" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
    ghost: true;
  }
}
// let theme = createTheme() as ThemeProps;
// // console.log("adding dashed", theme.components.button.variants)
// theme = createTheme({
//   components: {
//     button: {
//       variants: {
//         container: `
//           background-color: green;
//         `,
//         ghost: (theme: ThemeProps) => `
//           background-color: blue;
//         `,
//       },
//     },
//   },
// })
// console.log("adding ghost", theme.components.button.variants.container(theme))
export default createTheme({
  components: {
    button: {
      variants: [
        {
          props: { variant: "dashed" },
          style: (theme: any): SerializedStyles => css`
              background-color: blue;
              color: red;
            `,
        },
      ],
    },
  },
})
