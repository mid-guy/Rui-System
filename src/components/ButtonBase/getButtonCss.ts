import { css, SerializedStyles } from '@emotion/react';
import { BaseProps } from './ButtonBase';


export const generateButtonClassNames = (props: any) => {
  return Object.keys(props).reduce((prevClasses: any, key: any) => {
    if( props[key] ) return [...prevClasses, classNames[key].slice(1)]
    return prevClasses
  }
  ,[]).join(" ")
}

const classNames: { [key: string]: string} = {
  root: ".cds-button-root",
  fullWidth: ".cds-button-fullWidth",
  disabled: ".cds-button-disabled",
  visible: ".cds-button-visible", 
}

const getButtonCss = (theme: any, props: BaseProps): SerializedStyles => css`
  &${classNames.root} {
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    min-width: 64px;
    border-radius: 0.375rem;
    > * {
      pointer-events: none;
    }
  }
  .cds-button-contained: {
  }
  .cds-button-primary {
  }
  ${theme.components.button.variants[props.variant as NonNullable<keyof typeof theme.components.button.variants>]};
  ${theme.components.button.backgrounds[props.background as NonNullable<keyof typeof theme.components.button.backgrounds>]};
  ${theme.animationframe.button.animationframe[props.animationframe as NonNullable<keyof typeof theme.animationframe.button.animationframe>]};
  .cds-button-sm {
    ${theme.components.button.sizes[props.size as NonNullable<keyof typeof theme.components.button.sizes>]};
  }
  font-family: inherit;
  &${classNames.fullWidth} {
    width: 100%;
  }
  &${classNames.disabled} {
    color: rgba(0, 0, 0, 0.26);
    pointer-events: none;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
    ${props.variant === "text" && "border: none"}
  } 
  
  &${classNames.visible} {
    display: ${props.isVisible ? "block" : "none"};
  }
`;

export default getButtonCss