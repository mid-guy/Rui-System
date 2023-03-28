import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";

const getRadioCss = (theme: ThemeProps, props: any): SerializedStyles => css`
  &.RuiRadioRoot {
    display: flex;
    align-items: center;
    .RuiRadioInput {
      display: none;
    }
    .RuiRadioInput:checked + .RuiRadioTouchable {
      &::before {
        border-width: 8px;
        border-color: ${theme.palette.primary.main};
      }
    }
    .RuiRadioTouchable {
      width: 20px;
      height: 20px;
      border: 2px solid ${theme.palette.primary.main};
      border-radius: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &::before {
        content: "";
        position: absolute;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        border-width: 0px;
        border-color: red;
        border: 2px solid transparent;
        transform-origin: center;
        box-sizing: border-box;
        transition: all ${theme.transitions.duration.standard}ms
          ${theme.transitions.timingFunction.smooth};
      }
    }
  }
`;
const ShrinkBounceAnimation = `
  @keyframes shrink-bounce {
    0% {
      transform: scale(1);
    }
    33% {
      transform: scale(0.85);
    }
    100% {
      transform: scale(1);
    }
  }
`;
export default getRadioCss;
