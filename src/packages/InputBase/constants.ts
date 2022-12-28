import { ThemeProps } from "../../core/theme/themeProvider";
import { classNames } from "./getInputBaseCss";

export const variants = {
  filled: (theme: ThemeProps) => `
    background-color: rgba(0, 0, 0, 0.06);
    border-top-left-radius: ${theme.palette.shape.borderRadius}px;
    border-top-right-radius: ${theme.palette.shape.borderRadius}px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    &:hover {
      border-color: rgba(0, 0, 0, 0.87);
      background-color: rgba(0, 0, 0, 0.09);
    }
    > input {
      background: none
    }
  `,
  outlined: (theme: ThemeProps) => `
    background: inherit;
    border-radius: ${theme.palette.shape.borderRadius}px;
    border-color: rgba(0, 0, 0, 0.23);
    border-width: ${theme.palette.shape.borderWidth}px;
    border-style: ${theme.palette.shape.borderStyle.solid};
    &:hover {
      border-color: rgba(0, 0, 0, 0.87);
    }
  `,
  text: (theme: ThemeProps) => `
    background: inherit;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.42);
  `,
};

export const colors = {
  primary: (theme: ThemeProps) => `
    &.${classNames.focused} {
      border-color: ${theme.palette.primary.main};
    }
  `,
  secondary: (theme: ThemeProps) => `
    &.${classNames.focused} {
      border-color: ${theme.palette.secondary.main};
    }
  `,
  ternary: (theme: ThemeProps) => `
    &.${classNames.focused} {
      border-color: ${theme.palette.ternary.main};
    }
  `,
}

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