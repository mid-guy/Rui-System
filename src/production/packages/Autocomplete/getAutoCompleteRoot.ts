import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";

export const getAutoCompleteCss = (
  theme: ThemeProps,
  props: any
): SerializedStyles => css`
  &.${classNames.root} {} 
`;

export const classNames: { [key: string]: string | any } = {
  root: "RuiAutocompleteRoot",
};