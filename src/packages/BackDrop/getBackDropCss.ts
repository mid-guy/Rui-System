import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";

export const classNames: { [key: string]: string | any } = {
  root: "MuiBackDropRoot",
};

export const getBackDropCss = (
  theme: ThemeProps
): SerializedStyles => css`
  &.${classNames.root} {
    position: fixed;
    inset: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
