import { css, SerializedStyles } from '@emotion/react';
import { BaseProps, ButtonPropsAnimationFrame, ButtonPropsBackground, ButtonPropsSize, ButtonPropsVariant } from './ButtonBase';
export const generateButtonClassNames = (props: {
  root: boolean, fullWidth?: boolean, disabled?: boolean,
  variant?: ButtonPropsVariant, size?: ButtonPropsSize, background?: ButtonPropsBackground, animationframe?: ButtonPropsAnimationFrame
}) => {
  const _props: { [key: string]: boolean | string | ButtonPropsSize } = props
  return Object.keys(props).reduce((prevClasses: any, key: any) => {
    if (_props[key]) {
      if (key === "size" || key === "background" || key === "variant" || key === "animationframe") {
        return [...prevClasses, classNames[key](_props[key])]
      }
      return [...prevClasses, classNames[key]]
    }
    return prevClasses
  }
    , []).join(" ")
}
const classNames: { [key: string]: any } = {
  root: "cds-button-root",
  fullWidth: "cds-button-fullWidth",
  disabled: "cds-button-disabled",
  visible: "cds-button-visible",
  variant: (value: ButtonPropsVariant): string => {
    return `cds-button-${capitalizeFirstLetter(value)}`
  },
  background: (value: ButtonPropsBackground): string => {
    return `cds-button-bg${capitalizeFirstLetter(value)}`
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
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    min-width: 64px;
    border-radius: 0.375rem;
    > * {
      pointer-events: none;
    }
  }
  &.${classNames.variant(props.variant)} {
    ${theme.components.button.variants[props.variant as NonNullable<keyof typeof theme.components.button.variants>]};
  }
  &.${classNames.background(props.background)} {
    ${theme.components.button.backgrounds[props.background as NonNullable<keyof typeof theme.components.button.backgrounds>]};
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
`;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default getButtonCss