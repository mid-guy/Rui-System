import { css, SerializedStyles } from "@emotion/react";

const TOOLTIPS = "RuiTooltips";

export const classNames = {
  root: "RuiTooltips",
  tooltipsContainer: "RuiTooltipsContainer",
  tooltipsBridge: "RuiTooltipsBridge",
  tooltipsContent: "RuiTooltipsContent",
  tooltipsContentVisible: "RuiTooltipsContentVisible",
};

const getTooltipsCss = (
  theme: any,
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
      transform: translate(-50%, 0);
      cursor: pointer;
      width: fit-content;
      height: fit-content;
      top: ${props.top}px;
      left: ${props.left}px;
      .${classNames.tooltipsContent} {
        background-color: rgb(124, 124, 124);
        white-space: nowrap;
        padding: 5px 13px;
        font-size: 14px;
        text-align: center;
        border-radius: 6px;
        opacity: 0;
        transition: all 500ms ease;
        color: #fff;
        &::after {
          content: "";
          top: 100%;
          left: 50%;
          position: absolute;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: rgb(124, 124, 124) transparent transparent transparent;
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
