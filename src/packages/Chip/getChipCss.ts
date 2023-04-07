import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
import { ChipPropsColor, ChipPropsSize, OverallChipProps } from "./Chip";

const getChipCss = (
  theme: ThemeProps,
  props: OverallChipProps
): SerializedStyles => css`
  &.RuiChip {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-family: ${theme.typography.fontFamily};
    &.RuiChipColor {
      ${colors[props.color as NonNullable<ChipPropsColor>](theme)}
    }
    &.RuiChipSize {
      ${sizes[props.size as NonNullable<ChipPropsSize>](theme)}
    }
  }
`;

const colors = {
  default: (theme: ThemeProps) => `
    background-color: ${theme.palette.action.default};
    color: ${theme.palette.text.primary}
  `,
  primary: (theme: ThemeProps) => `
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText}
  `,
  secondary: (theme: ThemeProps) => `
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.secondary.contrastText}
  `,
  error: (theme: ThemeProps) => `
    background-color: ${theme.palette.error.main};
    color: ${theme.palette.error.contrastText}
  `,
  info: (theme: ThemeProps) => `
    background-color: ${theme.palette.info.main};
    color: ${theme.palette.info.contrastText}
  `,
  success: (theme: ThemeProps) => `
    background-color: ${theme.palette.success.main};
    color: ${theme.palette.success.contrastText}
  `,
  warning: (theme: ThemeProps) => `
    background-color: ${theme.palette.warning.main};
    color: ${theme.palette.warning.contrastText}
  `,
};

const sizes = {
  sm: (theme: ThemeProps) => `
    font-size: ${theme.typography.subtitle2.fontSize}px;
    height: 32px;
    border-radius: 16px;
    padding: 6px 12px;
  `,
  md: (theme: ThemeProps) => `
    font-size: ${theme.typography.body1.fontSize}px;
    padding: 6px 12px;
    border-radius: 17px;
    height: 34px;
  `,
};

export default getChipCss;
