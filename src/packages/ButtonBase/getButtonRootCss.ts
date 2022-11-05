import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";

const getButtonRootCss = (theme: ThemeProps): SerializedStyles => css`
  &.cds-button-root {
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    user-select: none;
    border: none;
    cursor: pointer;
    min-width: 64px;
    border-radius: 0.375rem;
    transition: ${theme.transitions.duration.standard}ms ease;
    box-sizing: border-box;
    > * {
      pointer-events: none;
    }
  }
`;

export default getButtonRootCss;
