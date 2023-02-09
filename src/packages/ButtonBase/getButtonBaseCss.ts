import { css, SerializedStyles } from "@emotion/react";
import capitalizeFirstLetter from "../../core/utils/capitalizeFirstLetter";
import { ThemeProps } from "../../core/theme/themeProvider";
import {
  ButtonBaseProps,
  ButtonPropsAnimationFrame,
  ButtonPropsBackground,
  ButtonPropsOutlinedTheme,
  ButtonPropsSize,
  ButtonPropsTextColor,
  ButtonPropsVariant,
} from "./ButtonBase";

const RUI_BUTTON_BASE = "RuiButtonBase";

const mergeNameTargetComponent = (chain: string): string => {
  return `${RUI_BUTTON_BASE}${chain}`;
};

export const generateButtonBaseClassNames = (props: {
  fullWidth?: boolean;
  disabled?: boolean;
  variant?: ButtonPropsVariant;
  size?: ButtonPropsSize;
  background?: ButtonPropsBackground;
  outlinedTheme?: ButtonPropsOutlinedTheme;
  color?: ButtonPropsTextColor;
  animationframe?: ButtonPropsAnimationFrame;
  disableElevation?: boolean;
  visible?: boolean;
  invisible?: boolean;
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
    }, [])
    .join(" ");
};

const classNames: { [key: string]: string | any } = {
  root: mergeNameTargetComponent("Root"),
  fullWidth: mergeNameTargetComponent("FullWidth"),
  disabled: mergeNameTargetComponent("Disabled"),
  visible: mergeNameTargetComponent("Visible"),
  invisible: mergeNameTargetComponent("Hidden"),
  disableElevation: mergeNameTargetComponent("DisableElevation"),
  variant: (value: ButtonPropsVariant): string =>
    value && mergeNameTargetComponent(capitalizeFirstLetter(value)),
  color: (value: ButtonPropsTextColor): string =>
    value && mergeNameTargetComponent(`Text${capitalizeFirstLetter(value)}`),
  background: (value: ButtonPropsBackground): string =>
    value &&
    mergeNameTargetComponent(`Background${capitalizeFirstLetter(value)}`),
  outlinedTheme: (value: ButtonPropsOutlinedTheme): string =>
    value &&
    mergeNameTargetComponent(`Outlined${capitalizeFirstLetter(value)}`),
  size: (value: ButtonPropsSize): string =>
    value && mergeNameTargetComponent(`Size${value.toUpperCase()}`),
  animationframe: (value: ButtonPropsAnimationFrame): string =>
    mergeNameTargetComponent(`Animationframe${capitalizeFirstLetter(value)}`),
};

const getButtonCss = (
  theme: ThemeProps,
  props: ButtonBaseProps
): SerializedStyles => css`
  &.${classNames.root} {
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    user-select: none;
    border: none;
    cursor: pointer;
    min-width: 64px;
    border-radius: 0.375rem;
    transition: ${theme.transitions.duration.standard}ms ease;
    box-sizing: border-box;
    > * {
      pointer-events: none;
    }
  }
  &.${classNames.variant(props.variant)} {
    ${theme.components.button.variants[
      props.variant as NonNullable<
        keyof typeof theme.components.button.variants
      >
    ](theme)};
  }
  ${props.variant === "container" &&
  `
    &.${classNames.background(props.background)} {
      ${theme.components.button.backgrounds[
        props.background as NonNullable<
          keyof typeof theme.components.button.backgrounds
        >
      ](theme)};
    }`}

  ${props.variant === "outlined" &&
  `
  &.${classNames.outlinedTheme(props.outlinedTheme)} {
    ${theme.components.button.outlinedTheme[
      props.outlinedTheme as NonNullable<
        keyof typeof theme.components.button.outlinedTheme
      >
    ](theme)};
  }`}
  &.${classNames.size(props.size)} {
    ${theme.components.button.sizes[
      props.size as NonNullable<keyof typeof theme.components.button.sizes>
    ](theme)};
  }
  &.${classNames.animationframe(props.animationframe)} {
    ${theme.animationframe.button.animationframe[
      props.animationframe as NonNullable<
        keyof typeof theme.animationframe.button.animationframe
      >
    ](theme)};
  }

  ${props.variant === "text" &&
  `
    &.${classNames.color(props.color)} {
      ${theme.components.button.colors[
        props.color as NonNullable<keyof typeof theme.components.button.colors>
      ](theme)};
    }`}

  font-family: inherit;
  &.${classNames.fullWidth} {
    width: 100%;
  }
  &.${classNames.disabled} {
    color: ${theme.palette.text.disabled};
    pointer-events: none;
    box-shadow: none;
    background-color: ${theme.palette.action.disabledBackground};
  }
  ${props.disableElevation &&
  `
  &.${classNames.disableElevation} {
    box-shadow: none;
  }
  `}
  &.${classNames.visible} {
    display: inline-flex;
  }
  &.${classNames.invisible} {
    display: none;
  }
`;

export default getButtonCss;
