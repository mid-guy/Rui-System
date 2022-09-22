import { css, SerializedStyles } from '@emotion/react';

const getTextFieldCss = (theme: any, props: any): SerializedStyles => css`
.form {
  position: relative;
  width: 300px;
  height: 50px;
  font-size: 14px;
  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: inherit;
    border: 2px solid gray;
    border-radius: $radius;
    font-family: inherit;
    font-size: inherit;
    color: black;
    outline: none;
    background: none;
    padding: 10px 20px;
    box-sizing: border-box;
    transition: 250ms ease;
    &:hover {
      border-color: black;
    }
    &:focus {
      border-color: black;
    }
  }

  &__label {
    position: absolute;
    left: 1rem;
    top: 0.9rem;
    padding: 0 0.5rem;
    color: black;
    cursor: text;
    transition: top 200ms ease, left 200ms ease, font-size 200ms ease;
    background-color: inherent;
  }
}
`
export default getTextFieldCss