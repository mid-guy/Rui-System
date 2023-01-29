import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";

export const classNames: { [key: string]: string | any } = {
  root: "MuiBackDropRoot",
  blankBackDrop: "MuiBlankBackDrop",
  overlayBackDrop: "MuiOverlayBackDrop"
};

export const getBackDropCss = (
  theme: ThemeProps,
  props: {
    blankBackDrop?: boolean
  }
): SerializedStyles => css`
  &.${classNames.root} {
    position: fixed;
    inset: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props.blankBackDrop && `
    .${classNames.blankBackDrop} {
      position: relative;
      width: 100%;
      height: 100%;
    }`}
    ${!props.blankBackDrop && `
    .${classNames.overlayBackDrop} {
      position: relative;
      background-color: rgba(0, 0, 0, 0.5);
    }`}
  }
`
