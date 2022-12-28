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
};

export const sizes = {
  sm: (theme: ThemeProps) => `
    padding: ${theme.spacing(0.75)} ${theme.spacing(1.5)};
    height: 30px;
  `,
  md: (theme: ThemeProps) => `
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    height: 36px;
  `,
  lg: (theme: ThemeProps) => `
    padding: ${theme.spacing(1)} ${theme.spacing(3)};
    height: 42px;
  `,
};
