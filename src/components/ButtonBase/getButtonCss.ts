import { css, SerializedStyles } from '@emotion/react';
import { BaseProps } from './ButtonBase';

const getButtonCss = (theme: any, props: BaseProps): SerializedStyles => css`
  background: none;
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
  &:disabled {
    color: rgba(0, 0, 0, 0.26);
    pointer-events: none;
    ${props.variant === "container" && "background-color: rgba(0, 0, 0, 0.12)"}
    ${props.variant === "outlined" && "border: 1px solid rgba(0, 0, 0, 0.12)"}
    ${props.variant === "text" && "border: none"}
  }
  ${props.fullWidth && "width: 100%"};

  label {
    display: block;
  } 

  ${theme.animationframe.button.animationframe[props.animationframe as NonNullable<keyof typeof theme.animationframe.button.animationframe>]};

  ${theme.components.button.backgrounds[props.background as NonNullable<keyof typeof theme.components.button.backgrounds>]};
  
  ${theme.components.button.sizes[props.size as NonNullable<keyof typeof theme.components.button.sizes>]};

  ${theme.components.button.variants[props.variant as NonNullable<keyof typeof theme.components.button.variants>]};
  
  ${props.isVisible ? 'display: none' : 'display: block'}
`;

export default getButtonCss