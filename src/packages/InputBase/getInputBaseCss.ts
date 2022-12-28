import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
import capitalizeFirstLetter from "../../core/utils/capitalizeFirstLetter";
import {
  InputBaseProps,
  InputBasePropsSize,
  InputBasePropsTextColor,
  InputBasePropsVariant,
} from "./InputBase";

const getInputBaseCss = (
  theme: ThemeProps,
  props: InputBaseProps
): SerializedStyles => css`
  &.${classNames.formControlRoot} {
    box-sizing: border-box;
    display: inline-flex;
    color: rgba(0, 0, 0, 0.87);
    &.${classNames.variant(props.variant)} {
      ${theme.components.input.variants[props.variant as NonNullable<keyof typeof theme.components.input.variants>](theme)}
    }
    &.${classNames.size(props.size)} {
      ${theme.components.input.sizes[props.size as NonNullable<keyof typeof theme.components.input.sizes>](theme)}
    }
    &.${classNames.color(props.color)} {
      ${theme.components.input.colors[props.color as NonNullable<keyof typeof theme.components.input.colors>](theme)}
    }
    &.${classNames.fullWidth} {
      width: 100%;
    }
    transition: all ${theme.transitions.duration.shortest}ms ease-in;
    > input {
      background: inherit;
      border: none;
      outline: none;
      padding: 0;
    }
  }
`;


export const generateInputBaseClassNames = (props: {
  formControlRoot: boolean;
  inputBaseRoot: boolean;
  focused: boolean;
  variant?: InputBasePropsVariant;
  size?: InputBasePropsSize;
  color?: InputBasePropsTextColor;
  fullWidth?: boolean;
  disabled?: boolean;
}) => {
  const _props: { [key: string]: boolean | string } = props;
  return Object.keys(props).reduce((prevClasses: any, key: any) => {
    if (_props[key]) {
      if (
        key === "size" ||
        key === "background" ||
        key === "variant" ||
        key === "color" ||
        key === "outlinedTheme"
      ) {

        return [...prevClasses, classNames[key](_props[key])];
      }
      return [...prevClasses, classNames[key]];
    }
    return prevClasses;
  }, []);
};

export const classNames: { [key: string]: string | any } = {
  formControlRoot: "cds-formControl-root",
  inputBaseRoot: "cds-inputBase-root",
  focused: "cds-inputBase-focused",
  fullWidth: "cds-inputBase-fullWidth",
  disabled: "cds-input-disabled",
  variant: (value: InputBasePropsVariant): string => {
    return `cds-inputBase-${capitalizeFirstLetter(value)}`;
  },
  size: (value: InputBasePropsSize): string => {
    return `cds-inputBase-${capitalizeFirstLetter(value)}`;
  },
  color: (value: InputBasePropsTextColor): string => {
    return `cds-inputBase-${capitalizeFirstLetter(value)}`;
  },
};

export default getInputBaseCss;
