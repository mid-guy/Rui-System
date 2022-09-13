import { css, SerializedStyles } from '@emotion/react';
import { BaseProps } from './ButtonBase';

const getButtonCss = (theme: any, props: BaseProps): SerializedStyles => css`
  background: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  > * {
    pointer-events: none;
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
  span {
    position: absolute;
    background: red;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    animation: ripples 800ms linear infinite;
  }
  @keyframes ripples {
    0% {
      width: 0px;
      height: 0px;
      opacity: 0.5;
    }
    100% {
      width: 500px;
      height: 500px;
      opacity: 0;
    }
  }
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);

  ${theme.components.button.variants[props.variant as NonNullable<keyof typeof theme.components.button.variants>]};

  ${theme.components.button.backgrounds[props.background as NonNullable<keyof typeof theme.components.button.backgrounds>]};

`;

// &:active > label {
//   transform: scale(0.9);
// }

// ${ theme.button.sizes[props.size as NonNullable<keyof typeof theme.components.button.sizes>] };
export default getButtonCss