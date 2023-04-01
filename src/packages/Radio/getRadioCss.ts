import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
import { RadioPropsSize } from "./Radio";

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
          ${sizesRadioTouchableChecked[
            props.size as NonNullable<RadioPropsSize>
          ](theme)}
          border-color: ${theme.palette.primary.main};
        }
      }
      &.RuiRadioDisabled {
        .RuiRadioTouchable {
          border-color: ${theme.palette.shape.borderColor.transparent};
          background: ${theme.palette.action.disabledBackground};
        }
        .RuiRadioContent {
          color: ${theme.palette.text.disabled};
        }
      }
      .RuiRadioTouchable {
        border: 2px solid ${theme.palette.shape.borderColor.default};
        border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        ${sizesRadioTouchable[props.size as NonNullable<RadioPropsSize>](theme)}
        transition: all ${theme.transitions.duration.standard}ms
          ${theme.transitions.timingFunction.smooth};
        &::before {
          content: "";
          position: absolute;
          border-radius: 50%;
          border-width: 0px;
          ${sizesRadioTouchableBefore[
            props.size as NonNullable<RadioPropsSize>
          ](theme)}
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
        ${sizesRadioContent[props.size as NonNullable<RadioPropsSize>](theme)}
      }
    }
  }
`;

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
