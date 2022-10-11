import { css, SerializedStyles } from '@emotion/react';
import { BaseProps, ButtonPropsBackground, ButtonPropsSize } from './ButtonBase';


export const generateButtonClassNames = (props: { root: boolean, fullWidth?: boolean, disabled?: boolean, size?: ButtonPropsSize, background?: ButtonPropsBackground }) => {
  const _props: { [key: string]: boolean | string | ButtonPropsSize } = props
  return Object.keys(props).reduce((prevClasses: any, key: any) => {
    if (_props[key]) {
      if (key === "size" || key === "background") {
        return [...prevClasses, classNames[key](_props[key] as string)]
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
  size: (value: ButtonPropsSize): string => {
    return `cds-button-size${capitalizeFirstLetter(value)}`
  },
  background: (value: ButtonPropsBackground): string => {
    return `cds-button-bg${capitalizeFirstLetter(value)}`
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
  &.${classNames.size(props.size)} {
    ${theme.components.button.sizes[props.size as NonNullable<keyof typeof theme.components.button.sizes>]};
  }
  &.${classNames.background(props.background)} {
    ${theme.components.button.backgrounds[props.background as NonNullable<keyof typeof theme.components.button.backgrounds>]};
  }
  ${theme.components.button.variants[props.variant as NonNullable<keyof typeof theme.components.button.variants>]};
  ${theme.animationframe.button.animationframe[props.animationframe as NonNullable<keyof typeof theme.animationframe.button.animationframe>]};
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