import { ThemeProps } from "./../../core/theme/themeProvider";
import { css, SerializedStyles } from "@emotion/react";

export const RUI_TOUCH_RIPPLE_ROOT = "RuiTouchRipple";
export const mergeNameTargetComponent = (chain: string): string => {
  return `${RUI_TOUCH_RIPPLE_ROOT}${chain}`;
};

export const rootClasses = mergeNameTargetComponent("Root");

export const animationClasses = mergeNameTargetComponent("Animation");

export const testAnimationClasses = mergeNameTargetComponent("Test");

const getTouchRippleCss = (theme: ThemeProps): SerializedStyles => css`
  &.${rootClasses} {
    > .${animationClasses} {
      position: absolute;
      background: inherit;
      transform: translate(-50%, -50%);
      animation: onAnimationRipple 1300ms forwards;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      @keyframes onAnimationRipple {
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
export default getTouchRippleCss;
