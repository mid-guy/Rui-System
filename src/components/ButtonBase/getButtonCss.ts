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

  ${theme.components.button.variants[props.variant as NonNullable<keyof typeof theme.components.button.variants>]};

  ${theme.components.button.backgrounds[props.background as NonNullable<keyof typeof theme.components.button.backgrounds>]};

`;

// ${ theme.button.sizes[props.size as NonNullable<keyof typeof theme.components.button.sizes>] };
export default getButtonCss