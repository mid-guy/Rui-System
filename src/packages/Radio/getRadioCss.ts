import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
import { RadioPropsSize, RadioResponsiveSize } from "./Radio";
import { BreakPoints, BreakpointsValuesProps } from "../../core/types/type";

const getRadioCss = (theme: ThemeProps, props: any): SerializedStyles => css`
  &.RuiRadioRoot {
    .RuiRadioLabel {
      display: flex;
      align-items: center;
      .RuiRadioInput {
        display: none;
      }
      .RuiRadioInput:checked + .RuiRadioTouchable {
        border-color: ${theme.palette.primary.main};
        &::before {
          border-color: ${theme.palette.primary.main};
        }
      }
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
      ${getRadioSize({
        breakpoints: theme.breakpoints,
        theme: theme,
        size: props.size,
      })}
    }
  }
`;

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
    border: 8px solid ${theme.palette.primary.main};
  `,
  md: (theme: ThemeProps) => `
    border: 10px solid ${theme.palette.primary.main};
  `,
  lg: (theme: ThemeProps) => `
    border: 12px solid ${theme.palette.primary.main};
  `,
};

export default getRadioCss;
