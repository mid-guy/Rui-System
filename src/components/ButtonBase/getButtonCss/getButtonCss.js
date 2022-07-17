import { css } from '@emotion/react'

export const variants = {
  primary: (theme) => css`
    background-color: red;
  `,
  secondary: (theme) => css`
    background-color: blue;
  `
}

  // ${variants[props.variant]()};
const getButtonCss = (props) => css`
  background: none;
  border: none;
  padding: 10px 18px;

  label {
    text-transform: none;
  }
`;

export default getButtonCss