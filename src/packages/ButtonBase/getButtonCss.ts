import { css, SerializedStyles } from "@emotion/react";
import capitalizeFirstLetter from "../../core/helpers/capitalizeFirstLetter";
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

export const generateButtonClassNames = (props: {
  root: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  variant?: ButtonPropsVariant;
  size?: ButtonPropsSize;
  background?: ButtonPropsBackground;
  outlinedTheme?: ButtonPropsOutlinedTheme;
  color?: ButtonPropsTextColor;
  animationframe?: ButtonPropsAnimationFrame;
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
  root: "cds-button-root",
  fullWidth: "cds-button-fullWidth",
  disabled: "cds-button-disabled",
  visible: "cds-button-visible",
  touchRipple: "cds-ripple-root",
  variant: (value: ButtonPropsVariant): string => {
    return value && `cds-button-${capitalizeFirstLetter(value)}`;
  },
  color: (value: ButtonPropsTextColor): string => {
    return value && `cds-button-text${capitalizeFirstLetter(value)}`;
  },
  background: (value: ButtonPropsBackground): string => {
    return value && `cds-button-bg${capitalizeFirstLetter(value)}`;
  },
  outlinedTheme: (value: ButtonPropsOutlinedTheme): string => {
    return value && `cds-button-outlined${capitalizeFirstLetter(value)}`;
  },
  size: (value: ButtonPropsSize): string => {
    return value && `cds-button-size${capitalizeFirstLetter(value)}`;
  },
  animationframe: (value: ButtonPropsAnimationFrame): string => {
    return value && `cds-button-animation${capitalizeFirstLetter(value)}`;
  },
};

const getButtonCss = (
  theme: ThemeProps,
  props: ButtonBaseProps
): SerializedStyles => css`
  &.${classNames.root} {
    display: inline-flex;
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
  &.${classNames.color(props.color)} {
    ${theme.components.button.colors[
      props.color as NonNullable<keyof typeof theme.components.button.colors>
    ](theme)};
  }
  &.${classNames.background(props.background)} {
    ${theme.components.button.backgrounds[
      props.background as NonNullable<
        keyof typeof theme.components.button.backgrounds
      >
    ](theme)};
  }
  &.${classNames.outlinedTheme(props.outlinedTheme)} {
    ${theme.components.button.outlinedTheme[
      props.outlinedTheme as NonNullable<
        keyof typeof theme.components.button.outlinedTheme
      >
    ](theme)};
  }
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
  &.${classNames.visible} {
    display: ${props.isVisible ? "block" : "none"};
  }
  .${classNames.touchRipple} {
    > .cds-animation-ripple {
      position: absolute;
      background: inherit;
      transform: translate(-50%, -50%);
      animation: ripples 650ms linear;
      border-radius: 50%;
      @keyframes ripples {
        0% {
          width: 0px;
          height: 0px;
          opacity: 0.15;
        }
        100% {
          width: 500px;
          height: 500px;
          opacity: 0;
        }
      }
    }
  }
`;

export default getButtonCss;
