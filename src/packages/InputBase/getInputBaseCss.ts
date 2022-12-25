
import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
import capitalizeFirstLetter from "../../core/utils/capitalizeFirstLetter";
import { InputBaseProps, InputBasePropsVariant } from "./InputBase";

const getInputBaseCss = (theme: ThemeProps,
  props: InputBaseProps): SerializedStyles => css`
    &.${classNames.formControlRoot} {
      background: inherit;
      padding: 6px 12px;
      box-sizing: border-box;
      display: inline-flex;
      height: 36px;
      color: rgba(0, 0, 0, 0.87);
      &.${classNames.variant(props.variant)} {
        ${theme.components.input.variants[props.variant as NonNullable<keyof typeof theme.components.input.variants>](theme)}
      }
      ${props.variant !== "text" && ` 
        border-radius: ${theme.palette.shape.borderRadius}px;
      `}
      border-width: ${theme.palette.shape.borderWidth}px;
      border-style: ${theme.palette.shape.borderStyle.solid};
      border-color: rgba(0, 0, 0, 0.23);
      transition: border ${theme.transitions.duration.shortest}ms ease-in;
      &:hover {
        border-color: ${theme.palette.text.primary};
      }
      &.${classNames.inputBaseFocused} {
        border-color:  ${theme.palette.primary.main};
        transition: border ${theme.transitions.duration.shorter}ms ease-in;
      }
      > input {
        background: inherit;
        border: none;
        outline: none;
        padding: 0;
      }
    }
  `


export const generateInputBaseClassNames = (props: {
  formControlRoot: boolean
  inputBaseRoot: boolean
  inputBaseFocused: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}) => {
  const _props: { [key: string]: boolean | string } = props;
  return Object.keys(props)
    .reduce((prevClasses: any, key: any) => {
      if (_props[key]) {
        if (
          key === "size" ||
          key === "background" ||
          key === "variant" ||
          key === "color" ||
          key === "outlinedTheme" ||
          key === "animationframe"
        ) {
          return [...prevClasses, classNames[key](_props[key])];
        }
        return [...prevClasses, classNames[key]];
      }
      return prevClasses;
    }, []);
};


const classNames: { [key: string]: string | any } = {
  formControlRoot: "cds-formControl-root",
  inputBaseRoot: "cds-inputBase-root",
  inputBaseFocused: "cds-inputBase-focused",
  fullWidth: "cds-inputBase-fullWidth",
  disabled: "cds-input-disabled",
  variant: (value: InputBasePropsVariant): string => {
    return value && `cds-inputBase-${capitalizeFirstLetter(value)}`;
  },
};

export default getInputBaseCss