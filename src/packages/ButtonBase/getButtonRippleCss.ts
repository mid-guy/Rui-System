import { ThemeProps } from "./../../core/theme/themeProvider";
import { css, SerializedStyles } from "@emotion/react";

const getButtonRippleCss = (theme: ThemeProps): SerializedStyles => css`
  &.cds-ripple-root {
    > .cds-animation-ripple {
      position: absolute;
      background: inherit;
      transform: translate(-50%, -50%);
      animation: ripples 650ms linear;
      border-radius: 50%;
      @keyframes ripples {
        0% {
          width: 0px;
          height: 0px;
          opacity: 0.15;
        }
        100% {
          width: 500px;
          height: 500px;
          opacity: 0;
        }
      }
    }
  }
`;

export default getButtonRippleCss;
