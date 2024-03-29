import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";

export const RUI_BUTTON_ROOT = "RuiButtonRoot";
export const mergeNameTargetComponent = (chain: string): string => {
  return `${RUI_BUTTON_ROOT}${chain}`;
};
const getButtonRootCss = (theme: ThemeProps): SerializedStyles => css`
  &.${RUI_BUTTON_ROOT} {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    user-select: none;
    border: none;
    cursor: pointer;
    min-width: 64px;
    border-radius: 4px;
    transition: ${theme.transitions.duration.standard}ms ease;
    box-sizing: border-box;
    > * {
      pointer-events: none;
    }
  }
`;

export default getButtonRootCss;
