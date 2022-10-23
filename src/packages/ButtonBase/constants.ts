import { convertHEXtoRGB } from "../../core/helpers/convertHEXtoRGB";
import { palette } from "../../core/theme/createTheme";
import { ThemeProps } from "../../core/theme/themeProvider";
export const types = { button: "button", submit: "submit" };

export const sizes = {
  sm: (theme: ThemeProps) => `
    padding: 6px 12px;
    font-size: 12px;
    height: 30px;
  `,
  md: (theme: ThemeProps) => `
    padding: 8px 16px;
    font-size: 14px;
    height: 36px;
  `,
  lg: (theme: ThemeProps) => `
    padding: 8px 24px;
    font-size: 16px;
    height: 42px;
  `,
};

export const animationframes = {
  ripple: (theme: ThemeProps) => `
    position: relative;
    overflow: hidden;
  `,
  scale: (theme: ThemeProps) => `
    transition-duration: ${theme.transitions.duration.shortest}ms;
    &:active {
      transform: scale(0.95);
    }
  `,
};

export const variants = {
  container: (theme: ThemeProps) => `
    color: ${palette.primary.contrastText};
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

export const colors = {
  primary: (theme: ThemeProps) => `
    color: ${theme.palette.primary.main};
    &:hover {
      background: ${convertHEXtoRGB(theme.palette.primary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${theme.palette.primary.main};
    }
  `,
  secondary: (theme: ThemeProps) => `
    color: ${theme.palette.secondary.main};
    &:hover {
      background: ${convertHEXtoRGB(theme.palette.secondary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${theme.palette.secondary.main};
    }
  `,
  ternary: (theme: ThemeProps) => `
    color: ${theme.palette.ternary.main};
    &:hover {
      background: ${convertHEXtoRGB(theme.palette.ternary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${theme.palette.ternary.main};
    }
  `,
};

export const backgrounds = {
  primary: (theme: ThemeProps) => `
    background-color: ${theme.palette.primary.main};
    .cds-ripple-root {
      background: white;
    }
  `,
  secondary: (theme: ThemeProps) => `
    background-color: ${theme.palette.secondary.main};
    .cds-ripple-root {
      background: white;
    }
  `,
  ternary: (theme: ThemeProps) => `
    background-color: ${theme.palette.ternary.main};
    .cds-ripple-root {
      background: white;
    }
  `,
};

export const outlinedTheme = {
  primary: (theme: ThemeProps) => `
    border: 1px solid ${convertHEXtoRGB(theme.palette.primary.main, 0.5)};
    color: ${theme.palette.primary.main};
    &:hover {
      border: 1px solid ${theme.palette.primary.main};
      background: ${convertHEXtoRGB(theme.palette.primary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${theme.palette.primary.main};
    }
  `,
  secondary: (theme: ThemeProps) => `
    border: 1px solid ${theme.palette.secondary.main};
    color: ${theme.palette.secondary.main};
    &:hover {
      border: 1px solid ${theme.palette.secondary.main};
      background: ${convertHEXtoRGB(theme.palette.secondary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${theme.palette.secondary.main};
    }
  `,
  ternary: (theme: ThemeProps) => `
    border: 1px solid ${convertHEXtoRGB(theme.palette.secondary.main, 0.5)};
    color: ${theme.palette.ternary.main};
    &:hover {
      border: 1px solid ${theme.palette.secondary.main};
      background: ${convertHEXtoRGB(theme.palette.secondary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${theme.palette.secondary.main};
    }
  `,
};