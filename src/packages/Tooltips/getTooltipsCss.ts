import { ThemeProps } from "./../../core/theme/themeProvider";
import { css, SerializedStyles } from "@emotion/react";
import { chainClassName } from "../../core/utils/chainClassName";

const TOOLTIPS = chainClassName("RuiTooltips");

export const classNames = {
  root: TOOLTIPS,
  tooltipsContainer: chainClassName(TOOLTIPS, "Container"),
  tooltipsBridge: chainClassName(TOOLTIPS, "Bridge"),
  tooltipsContent: chainClassName(TOOLTIPS, "Content"),
  tooltipsContentVisible: chainClassName(TOOLTIPS, "ContentVisible"),
};

const getTooltipsCss = (
  theme: ThemeProps,
  props: {
    mounting: boolean;
    isVisible: boolean;
    left: number;
    top: number;
  }
): SerializedStyles => css`
  &.${classNames.root} {
    position: relative;
    width: 100%;
    height: 100%;
    .${classNames.tooltipsBridge} {
      pointer-events: auto;
      position: absolute;
      transform: translate(-50%, -6px);
      cursor: pointer;
      width: fit-content;
      height: fit-content;
      top: ${props.top}px;
      left: ${props.left}px;
      .${classNames.tooltipsContent} {
        background-color: ${theme.palette.background.default};
        white-space: nowrap;
        padding: 5px 13px;
        font-size: 14px;
        text-align: center;
        border-radius: 6px;
        opacity: 0;
        transition: all
          ${props.mounting
            ? theme.transitions.duration.enteringScreen
            : theme.transitions.duration.leavingScreen}ms
          ease-in;
        color: ${theme.palette.text.default};
        &::after {
          content: "";
          top: 100%;
          left: 50%;
          position: absolute;
          margin-left: -5px;
          border-width: 5px;
          border-style: ${theme.palette.shape.borderStyle.solid};
          border-color: ${theme.palette.background.default} transparent
            transparent transparent;
        }
        ${props.mounting &&
        `
          &.${classNames.tooltipsContentVisible} {
            opacity: 1;
          }
        `}
      }
    }
  }
`;

export default getTooltipsCss;
