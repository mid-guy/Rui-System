import { css, SerializedStyles } from '@emotion/react';
import { BaseProps } from './type';

export const variants = {
  container: (theme: any) => css`
    color: #fff;
  `,
  outlined: (theme: any) => css`
    color: red;
    border: 1px solid red;
    background: none;
  `,
  text: (theme: any) => css`
    background: none;
  `
}

export const types = { button: "button", submit: "submit" }

export const backgrounds = {
  primary: (theme: any): SerializedStyles => css`
    background-color: rgb(25, 118, 210);
  `,
  secondary: (theme: any): SerializedStyles => css`
    background-color: rgb(156, 39, 176);
  `,
  ternary: (theme: any): SerializedStyles => css`
    background-color: rgb(211, 47, 47);
  `
}

export const sizes = {
  sm: (theme: any) => css`
    min-width: 64px
  `,
  md: (theme: any) => css`
    min-width: 138px
  `,
  lg: (theme: any) => css`
    min-width: 238px
  `,
}

const getButtonCss = (theme: any, props: BaseProps): SerializedStyles => css`
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

  ${backgrounds[props.background as NonNullable<keyof typeof backgrounds>](theme)};
  
  ${sizes[props.size as NonNullable<keyof typeof sizes>](theme)};

  ${variants[props.variant as NonNullable<keyof typeof variants>](theme)};
  

`;

export default getButtonCss