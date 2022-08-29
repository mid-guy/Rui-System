import { css, SerializedStyles } from "@emotion/react";

export const types = { button: "button", submit: "submit" };

export const sizes = {
    sm: (theme: any) => css`
    min-width: 64px;
  `,
    md: (theme: any) => css`
    min-width: 138px;
  `,
    lg: (theme: any) => css`
    min-width: 238px;
  `,
};

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
  `,
};

export const backgrounds = {
    primary: (theme: any): SerializedStyles => css`
    background-color: rgb(25, 118, 210);
  `,
    secondary: (theme: any): SerializedStyles => css`
    background-color: rgb(156, 39, 176);
  `,
    ternary: (theme: any): SerializedStyles => css`
    background-color: rgb(211, 47, 47);
  `,
};
