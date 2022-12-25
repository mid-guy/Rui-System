import { ThemeProps } from "../../core/theme/themeProvider";

export const variants = {
  filled: (theme: ThemeProps) => `
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  `,
  outlined: (theme: ThemeProps) => `
    background: inherit;
  `,
  text: (theme: ThemeProps) => `
    background: inherit;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    border: none;
  `,
}