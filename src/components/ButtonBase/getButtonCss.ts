import { css, SerializedStyles } from '@emotion/react';
import { BaseProps } from './type';

const getButtonCss = (theme: any, props: any): SerializedStyles => css`
  background: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;

  &:active > label {
    transform: scale(0.9);
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.12);
    pointer-events: none;
    cursor: default;
  }

  label {
    display: block;
    transition-duration: 200ms;
  } 

  ${theme.variants[props.variant as NonNullable<keyof typeof theme.variants>](theme)};
  
  ${theme.sizes[props.size as NonNullable<keyof typeof theme.sizes>](theme)};
  
  ${theme.backgrounds[props.background as NonNullable<keyof typeof theme.backgrounds>](theme)};

`;

export default getButtonCss