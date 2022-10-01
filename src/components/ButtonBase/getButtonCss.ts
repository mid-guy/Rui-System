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
  visible: ".cds-button-visible" 
}

const getButtonCss = (theme: any, props: BaseProps): SerializedStyles => css`
  &${classNames.root} {
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 0.375rem;
    padding: 0.5rem 1rem;
    height: 36px;
    font-size: 14px;
    > * {
      pointer-events: none;
    }
    font-family: ${theme.typography.fontFamily};
  }
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

  ${theme.components.button.variants[props.variant as NonNullable<keyof typeof theme.components.button.variants>]};

  ${theme.animationframe.button.animationframe[props.animationframe as NonNullable<keyof typeof theme.animationframe.button.animationframe>]};

  ${theme.components.button.backgrounds[props.background as NonNullable<keyof typeof theme.components.button.backgrounds>]};
  
  ${theme.components.button.sizes[props.size as NonNullable<keyof typeof theme.components.button.sizes>]};
  
  ${props.isVisible ? 'display: none' : 'display: block'}
`;



export default getButtonCss