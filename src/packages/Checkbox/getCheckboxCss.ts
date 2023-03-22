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
      color: ${theme.palette.text.primary};
      ${sizesCheckboxContent[props.size as NonNullable<CheckboxPropsSize>](
        theme
      )}
    }
    .RuiCheckboxTouchable {
      display: flex;
      justify-content: center;
      align-items: center;
      ${sizesCheckboxTouchable[props.size as NonNullable<CheckboxPropsSize>](
        theme
      )}
      background: transparent;
      border: 1px solid ${theme.palette.shape.borderColor.default};
      border-radius: ${theme.palette.shape.borderRadius}px;
      cursor: pointer;
      transition: all ${theme.transitions.duration.standard}ms
        ${theme.transitions.timingFunction.smooth};
      &:hover {
        border-color: ${theme.palette.shape.borderColor.hover};
      }
      &.RuiCheckboxTouchableDisabled {
        cursor: default;
        pointer-events: none;
        border-color: ${theme.palette.action.disabledBackground};
      }
    }
    .RuiCheckboxInput + label:hover,
    .RuiCheckboxInput:focus + label {
      color: ${theme.palette.text.contrast};
    }
    .RuiCheckboxInput:checked + label > .RuiCheckboxTouchable {
      ${sizesCheckboxTouchableChecked[
        props.size as NonNullable<CheckboxPropsSize>
      ](theme)}
      &.RuiCheckboxTouchableDisabled {
        border-color: ${theme.palette.action.disabledBackground};
      }
      animation: shrink-bounce ${theme.transitions.duration.short}ms
        ${theme.transitions.timingFunction.smooth};
    }
    .RuiCheckboxInput:checked + label > .RuiCheckboxTouchable:before {
      content: "";
      position: absolute;
      ${positionRuiCheckboxTouchableBefore[
        props.size as NonNullable<CheckboxPropsSize>
      ](theme)}
      border-right: 2px solid transparent;
      border-bottom: 2px solid transparent;
      transform: rotate(45deg);
      transform-origin: 0% 100%;
      animation: checkbox-check ${theme.transitions.duration.shortest}ms
        ${theme.transitions.duration.standard}ms
        ${theme.transitions.timingFunction.smooth} forwards;
    }
  }
  ${animationFrames["fill"](props.size as NonNullable<CheckboxPropsSize>)(
    theme
  )}
`;

export const positionRuiCheckboxTouchableBefore = {
  sm: (theme: ThemeProps) => `
    left: 5px;
  `,
  md: (theme: ThemeProps) => `
    left: 6px;
  `,
  lg: (theme: ThemeProps) => `
    left: 7px;
  `,
};

export const sizesCheckboxTouchable = {
  sm: (theme: ThemeProps) => `
    width: 20px;
    height: 20px;
  `,
  md: (theme: ThemeProps) => `
    width: 24px;
    height: 24px;
  `,
  lg: (theme: ThemeProps) => `
    width: 28px;
    height: 28px;
  `,
};

export const sizesCheckboxContent = {
  sm: (theme: ThemeProps) => `
    margin-left: 8px
  `,
  md: (theme: ThemeProps) => `
    margin-left: 10px
  `,
  lg: (theme: ThemeProps) => `
    margin-left: 12px
  `,
};

export const sizesCheckboxTouchableChecked = {
  sm: (theme: ThemeProps) => `
    border: 10px solid ${theme.palette.primary.main};
  `,
  md: (theme: ThemeProps) => `
    border: 12px solid ${theme.palette.primary.main};
  `,
  lg: (theme: ThemeProps) => `
    border: 14px solid ${theme.palette.primary.main};
  `,
};

export const animationFrames = {
  fill: (size: CheckboxPropsSize) => sizeCheckedIconFillAnimation[size],
};

export const sizeCheckedIconFillAnimation = {
  sm: (theme: ThemeProps) => `
    ${ShrinkBounceAnimation}
    @keyframes checkbox-check {
      0% {
        width: 0;
        height: 0;
        border-color: ${theme.palette.text.contrast};
        transform: translate3d(0, 0, 0) rotate(45deg);
      }
      33% {
        width: 3px;
        height: 0;
        transform: translate3d(0, 0, 0) rotate(45deg);
      }
      100% {
        width: 3px;
        height: 8px;
        border-color: ${theme.palette.text.contrast};
        transform: translate3d(0, -4px, 0) rotate(45deg);
      }
    }
  `,
  md: (theme: ThemeProps) => `
    ${ShrinkBounceAnimation}
    @keyframes checkbox-check {
      0% {
        width: 0;
        height: 0;
        border-color: ${theme.palette.text.contrast};
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
        border-color: ${theme.palette.text.contrast};
        transform: translate3d(0, -5px, 0) rotate(45deg);
      }
    }
  `,
  lg: (theme: ThemeProps) => `
    ${ShrinkBounceAnimation}
    @keyframes checkbox-check {
      0% {
        width: 0;
        height: 0;
        border-color: ${theme.palette.text.contrast};
        transform: translate3d(0, 0, 0) rotate(45deg);
      }
      33% {
        width: 6px;
        height: 0;
        transform: translate3d(0, 0, 0) rotate(45deg);
      }
      100% {
        width: 6px;
        height: 12px;
        border-color: ${theme.palette.text.contrast};
        transform: translate3d(0, -6px, 0) rotate(45deg);
      }
    }
  `,
};

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
