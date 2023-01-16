import { ThemeProps } from "../../core/theme/themeProvider";
import { classNames } from "./getInputBaseCss";
import { InputBasePropsVariant } from "./InputBase";

export const variants = {
  filled: (theme: ThemeProps) => `
    background-color: rgba(0, 0, 0, 0.06);
    border-top-left-radius: ${theme.palette.shape.borderRadius}px;
    border-top-right-radius: ${theme.palette.shape.borderRadius}px;
    border-bottom: 1px solid ${theme.palette.shape.borderColor.default};
    &:hover {
      border-color: ${theme.palette.shape.borderColor.hover};
      background-color: rgba(0, 0, 0, 0.09);
    }
    > input {
      background: none
    }
  `,
  outlined: (theme: ThemeProps) => `
    background: inherit;
    border-radius: ${theme.palette.shape.borderRadius}px;
    border-color: ${theme.palette.shape.borderColor.default};
    border-width: ${theme.palette.shape.borderWidth}px;
    border-style: ${theme.palette.shape.borderStyle.solid};
    &:hover {
      border-color: ${theme.palette.shape.borderColor.hover};
    }
  `,
  text: (theme: ThemeProps) => `
    background: inherit;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    align-items: flex-end;
    border-bottom: 1px solid ${theme.palette.shape.borderColor.default};
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
};

export const sizes = {
  sm: (theme: ThemeProps, variant: InputBasePropsVariant) => `
  padding: ${
    variant !== "text"
      ? `${theme.spacing(0.75)} ${theme.spacing(1.5)}`
      : `${theme.spacing(0.5)} ${theme.spacing(0)}`
  };
  font-size: 14px;
  height: 30px;
  `,
  md: (theme: ThemeProps, variant: InputBasePropsVariant) => `
  font-size: 16px;
  padding: ${
    variant !== "text"
      ? `${theme.spacing(1)} ${theme.spacing(2)}`
      : `${theme.spacing(0.5)} ${theme.spacing(0)}`
  };
  height: 36px;
  `,
  lg: (theme: ThemeProps, variant: InputBasePropsVariant) => `
  padding: ${
    variant !== "text"
      ? `${theme.spacing(1)} ${theme.spacing(2)}`
      : `${theme.spacing(0.5)} ${theme.spacing(0)}`
  };
    height: 42px;
  `,
};
