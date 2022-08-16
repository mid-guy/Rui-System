import { css } from '@emotion/react'

import { Props as ButtonProps } from './type';

export const variants = {
  primary: (theme: any) => css`
    background-color: red;
  `,
  secondary: (theme: any) => css`
    background-color: blue;
  `,
  ternary: (theme: any) => css`
    background-color: green;
  `
}

const getButtonCss = (theme: any, props: { variant: "primary" | "secondary" | "ternary" }) => css`
  background: none;
  border: none;
  padding: 10px 18px;

  ${variants[props.variant as NonNullable<ButtonProps['variant']>](theme)};

  label {
    text-transform: none;
  }
`;

export default getButtonCss