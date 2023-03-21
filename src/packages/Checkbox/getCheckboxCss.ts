import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
import { CheckboxProps, CheckboxPropsSize } from "./Checkbox";
export const getCheckboxCss = (
  theme: ThemeProps,
  props: Omit<CheckboxProps, "name" | "label" | "value">
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
        ${theme.transitions.timingFunction.smooth};
    }
    .RuiCheckboxContent {
      color: black;
    }
    .RuiCheckboxInput + label > .RuiCheckboxTouchable {
      display: flex;
      justify-content: center;
      align-items: center;
      ${sizes[props.size as CheckboxPropsSize](theme)}
      background: transparent;
      border: 1px solid ${theme.palette.shape.borderColor.default};
      border-radius: ${theme.palette.shape.borderRadius}px;
      cursor: pointer;
      transition: all ${theme.transitions.duration.standard}ms
        ${theme.transitions.timingFunction.smooth};
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
        ${theme.transitions.timingFunction.smooth};
    }
    .RuiCheckboxInput:checked + label > .RuiCheckboxTouchable:before {
      content: "";
      position: absolute;
      left: 6px;
      border-right: 2px solid transparent;
      border-bottom: 2px solid transparent;
      transform: rotate(45deg);
      transform-origin: 0% 100%;
      animation: checkbox-check ${theme.transitions.duration.shortest}ms
        ${theme.transitions.duration.standard}ms
        ${theme.transitions.timingFunction.smooth} forwards;
    }
    ${animationFrames["fill"](theme)}
  }
`;

export const sizes = {
  sm: (theme: ThemeProps) => `
    width: 20px;
    height: 20px;
    margin-right: 10px;
  `,
  md: (theme: ThemeProps) => `
    width: 24px;
    height: 24px;
    margin-right: 12px;
  `,
  lg: (theme: ThemeProps) => `
    width: 28px;
    height: 28px;
    margin-right: 14px;
  `,
};

export const animationFrames = {
  fill: (theme: ThemeProps) => `
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
  `,
};
