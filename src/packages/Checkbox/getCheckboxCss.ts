import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
export const getCheckboxCss = (
  theme: ThemeProps,
  props: any
): SerializedStyles => css`
  &.RuiCheckboxRoot {
    .RuiCheckboxInput {
      display: none;
    }
    .RuiCheckboxTouchable {
      display: block;
      box-sizing: border-box;
    }
    .RuiCheckboxInput + label {
      position: relative;
      display: flex;
      align-items: center;
      transition: color ${theme.transitions.duration.standard}ms
        cubic-bezier(0.4, 0, 0.23, 1);
    }
    .RuiCheckboxContent {
      color: black;
    }
    .RuiCheckboxInput + label > .RuiCheckboxTouchable {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 14px;
      width: 24px;
      height: 24px;
      background: transparent;
      border: 1px solid ${theme.palette.shape.borderColor.default};
      cursor: pointer;
      transition: all ${theme.transitions.duration.standard}ms
        cubic-bezier(0.4, 0, 0.23, 1);
      &:hover {
        border-color: ${theme.palette.shape.borderColor.hover};
      }
    }
    .RuiCheckboxInput + label:hover,
    .RuiCheckboxInput:focus + label {
      color: #fff;
    }
    .RuiCheckboxInput:checked + label > .RuiCheckboxTouchable {
      border: 12px solid ${theme.palette.primary.main};
      animation: shrink-bounce ${theme.transitions.duration.short}ms
        cubic-bezier(0.4, 0, 0.23, 1);
    }
    .RuiCheckboxInput:checked + label > .RuiCheckboxTouchable:before {
      content: "";
      position: absolute;
      left: 6px;
      border-right: 2px solid transparent;
      border-bottom: 2px solid transparent;
      transform: rotate(45deg);
      transform-origin: 0% 100%;
      animation: checkbox-check ${theme.transitions.duration.shorter}ms
        ${theme.transitions.duration.short}ms cubic-bezier(0.4, 0, 0.23, 1)
        forwards;
    }
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
    @keyframes checkbox-check {
      0% {
        width: 0;
        height: 0;
        border-color: #fff;
        transform: translate3d(0, 0, 0) rotate(45deg);
      }
      33% {
        width: 4px;
        height: 0;
        transform: translate3d(0, 0, 0) rotate(45deg);
      }
      100% {
        width: 4px;
        height: 10px;
        border-color: #fff;
        transform: translate3d(0, -5px, 0) rotate(45deg);
      }
    }
  }
`;
