import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
import {
  OverallRadioProps,
  RadioPropsSize,
  RadioResponsiveColor,
  RadioResponsiveSize,
  RaidoPropsColor,
} from "./Radio";
import { BreakPoints, BreakpointsValuesProps } from "../../core/types/type";

const getRadioCss = (
  theme: ThemeProps,
  props: OverallRadioProps
): SerializedStyles => css`
  &.RuiRadioRoot {
    .RuiRadioLabel {
      display: flex;
      align-items: center;
      .RuiRadioInput {
        display: none;
      }
      ${props.color &&
      getRadioColor({
        breakpoints: theme.breakpoints,
        theme: theme,
        color: props.color,
      })}
      &.RuiRadioDisabled {
        .RuiRadioTouchable {
          border-color: ${theme.palette.shape.borderColor.transparent};
          background: ${theme.palette.action.disabledBackground};
          cursor: auto;
        }
        .RuiRadioContent {
          color: ${theme.palette.text.disabled};
          cursor: auto;
        }
      }
      .RuiRadioTouchable {
        border: 2px solid ${theme.palette.shape.borderColor.default};
        cursor: pointer;
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all ${theme.transitions.duration.standard}ms
          ${theme.transitions.timingFunction.smooth};
        &::before {
          content: "";
          position: absolute;
          border-radius: 50%;
          border-width: 0px;
          border-color: red;
          border: 2px solid ${theme.palette.shape.borderColor.transparent};
          transform-origin: center;
          box-sizing: border-box;
          transition: all ${theme.transitions.duration.standard}ms
            ${theme.transitions.timingFunction.smooth};
        }
      }
      .RuiRadioContent {
        color: ${theme.palette.text.primary};
        cursor: pointer;
      }
      ${props.size &&
      getRadioSize({
        breakpoints: theme.breakpoints,
        theme: theme,
        size: props.size,
      })}
    }
  }
`;

function getRadioColor({
  breakpoints,
  color,
  theme,
}: {
  breakpoints: BreakPoints;
  color: RadioResponsiveColor;
  theme: ThemeProps;
}) {
  if (typeof color === "object") {
    let result = ``;
    for (let [breakpoint, value] of Object.entries(color)) {
      result += `
      ${breakpoints.down(breakpoint as BreakpointsValuesProps)} {
        .RuiRadioInput:checked + .RuiRadioTouchable {
          ${colorsRadioTouchableChecked[value as NonNullable<RaidoPropsColor>](
            theme
          )}
        }
      }
      `;
    }
    return result;
  }
  return `
    .RuiRadioInput:checked + .RuiRadioTouchable {
      ${colorsRadioTouchableChecked[color as NonNullable<RaidoPropsColor>](
        theme
      )}
    }
  `;
}

function getRadioSize({
  breakpoints,
  size,
  theme,
}: {
  breakpoints: BreakPoints;
  size: RadioResponsiveSize;
  theme: ThemeProps;
}) {
  if (typeof size === "object") {
    let result = ``;
    for (let [breakpoint, value] of Object.entries(size)) {
      result += `
      ${breakpoints.down(breakpoint as BreakpointsValuesProps)} {
        .RuiRadioTouchable {
          ${sizesRadioTouchable[value as NonNullable<RadioPropsSize>](theme)}
          &:before {
            ${sizesRadioTouchableBefore[value as NonNullable<RadioPropsSize>](
              theme
            )}
          }
        }
        .RuiRadioContent {
          ${sizesRadioContent[value as NonNullable<RadioPropsSize>](theme)}
        }
        .RuiRadioInput:checked + .RuiRadioTouchable {
          &::before {
            ${sizesRadioTouchableChecked[value as NonNullable<RadioPropsSize>](
              theme
            )}
          }
        }
      }
      `;
    }
    return result;
  }
  return `
  .RuiRadioTouchable {
    ${sizesRadioTouchable[size as NonNullable<RadioPropsSize>](theme)}
    &:before {
      ${sizesRadioTouchableBefore[size as NonNullable<RadioPropsSize>](theme)}
    }
  }
  .RuiRadioContent {
    ${sizesRadioContent[size as NonNullable<RadioPropsSize>](theme)}
  }
  .RuiRadioInput:checked + .RuiRadioTouchable {
    &::before {
      ${sizesRadioTouchableChecked[size as NonNullable<RadioPropsSize>](theme)}
    }
  }
`;
}

export const colorsRadioTouchableChecked = {
  primary: (theme: ThemeProps) => `
    border-color: ${theme.palette.primary.main};
    &::before {
      border-color: ${theme.palette.primary.main};
    }
  `,
  secondary: (theme: ThemeProps) => `
    border-color: ${theme.palette.secondary.main};
    &::before {
      border-color: ${theme.palette.secondary.main};
    }
  `,
  ternary: (theme: ThemeProps) => `
    border-color: ${theme.palette.ternary.main};
    &::before {
      border-color: ${theme.palette.ternary.main}; 
    }
  `,
};

export const sizesRadioTouchable = {
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

export const sizesRadioTouchableBefore = {
  sm: (theme: ThemeProps) => `
    width: 16px;
    height: 16px;
  `,
  md: (theme: ThemeProps) => `
    width: 20px;
    height: 20px;
  `,
  lg: (theme: ThemeProps) => `
    width: 24px;
    height: 24px;
  `,
};
export const sizesRadioContent = {
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

export const sizesRadioTouchableChecked = {
  sm: (theme: ThemeProps) => `
    border-width: 8px;
  `,
  md: (theme: ThemeProps) => `
    border: 10px;
  `,
  lg: (theme: ThemeProps) => `
    border: 12px;
  `,
};

export default getRadioCss;
