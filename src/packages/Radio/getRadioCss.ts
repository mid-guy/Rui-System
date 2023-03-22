import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";

const getRadioCss = (theme: ThemeProps, props: any): SerializedStyles => css`
  &.RuiRadioRoot {
    display: flex;
    align-items: center;
  }
`;

export default getRadioCss;
