import { css, SerializedStyles } from '@emotion/react';
import { BaseProps, ButtonPropsAnimationFrame, ButtonPropsBackground, ButtonPropsOutlinedTheme, ButtonPropsSize, ButtonPropsTextColor, ButtonPropsVariant } from './ButtonBase';
import { transitions } from './constants';
export const generateButtonClassNames = (props: {
  root: boolean, fullWidth?: boolean, disabled?: boolean,
  variant?: ButtonPropsVariant, size?: ButtonPropsSize, background?: ButtonPropsBackground, color?: ButtonPropsTextColor,animationframe?: ButtonPropsAnimationFrame
}) => {
  const _props: { [key: string]: boolean | string | ButtonPropsSize } = props
  return Object.keys(props).reduce((prevClasses: any, key: any) => {
    if (_props[key]) {
      if (key === "size" || key === "background" || key === "variant" || key === "color" || key === "outlinedTheme" || key === "animationframe") {
        return [...prevClasses, classNames[key](_props[key])]
      }
      return [...prevClasses, classNames[key]]
    }
    return prevClasses
  }
    , []).join(" ")
}
const classNames: { [key: string]: string | any} = {
  root: "cds-button-root",
  fullWidth: "cds-button-fullWidth",
  disabled: "cds-button-disabled",
  visible: "cds-button-visible",
  touchRipple: "cds-ripple-root",
  variant: (value: ButtonPropsVariant): string => {
    return `cds-button-${capitalizeFirstLetter(value)}`
  },
  color: (value: ButtonPropsTextColor): string => {
    return `cds-button-text${capitalizeFirstLetter(value)}`
  },
  background: (value: ButtonPropsBackground): string => {
    return `cds-button-bg${capitalizeFirstLetter(value)}`
  },
  outlinedTheme: (value: ButtonPropsOutlinedTheme): string => {
    return `cds-button-outlined${capitalizeFirstLetter(value)}`
  },
  size: (value: ButtonPropsSize): string => {
    return `cds-button-size${capitalizeFirstLetter(value)}`
  },
  animationframe: (value: ButtonPropsAnimationFrame): string => {
    return `cds-button-animation${capitalizeFirstLetter(value)}`
  },
}

const getButtonCss = (theme: any, props: BaseProps): SerializedStyles => css`
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
    margin: 0;
    border-radius: 0.375rem;
    transition: background-color ${transitions.duration.standard}ms ease;
    box-sizing: border-box;
    > * {
      pointer-events: none;
    }
  }
  &.${classNames.variant(props.variant)} {
    ${theme.components.button.variants[props.variant as NonNullable<keyof typeof theme.components.button.variants>]};
  }
  &.${classNames.color(props.color)} {
    ${theme.components.button.colors[props.color as NonNullable<keyof typeof theme.components.button.colors>]};
  }
  &.${classNames.background(props.background)} {
    ${theme.components.button.backgrounds[props.background as NonNullable<keyof typeof theme.components.button.backgrounds>]};
  }
  &.${classNames.outlinedTheme(props.outlinedTheme)} {
    ${theme.components.button.outlinedTheme[props.outlinedTheme as NonNullable<keyof typeof theme.components.button.outlinedTheme>]};
  }
  &.${classNames.size(props.size)} {
    ${theme.components.button.sizes[props.size as NonNullable<keyof typeof theme.components.button.sizes>]};
  }
  &.${classNames.animationframe(props.animationframe)} {  
    ${theme.animationframe.button.animationframe[props.animationframe as NonNullable<keyof typeof theme.animationframe.button.animationframe>]};
  }
  font-family: inherit;
  &.${classNames.fullWidth} {
    width: 100%;
  }
  &.${classNames.disabled} {
    color: rgba(0, 0, 0, 0.26);
    pointer-events: none;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
    ${props.variant === "text" && "border: none"}
  } 
  &.${classNames.visible} {
    display: ${props.isVisible ? "block" : "none"};
  }
  > .${classNames.touchRipple} {
    > .cds-animation-ripple {
      position: absolute;
      background: ${props.variant === "container" ? "white" : "red"};
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

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default getButtonCss