import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../../core/theme/themeProvider";

export const getLabelCollapseCss = (
  theme: ThemeProps,
  props: any
): SerializedStyles => css`
  &.${classNames.root} {
    border-radius: ${theme.palette.shape.borderRadius}px;
    background-color: red;
    padding: ${theme.spacing(1)} ${theme.spacing(1.5)};
    display: flex;
    align-items: center;
  }
`;

export const generateLabelCollapseClassNames = (props: {
  root: boolean;
}) => {
  const _props: { [key: string]: boolean | string } = props;
  return Object.keys(props).reduce((prevClasses: any, key: any) => {
    if (_props[key]) {
      if (key === "animationFrame" || key === "transitionStack") {
        return [...prevClasses, classNames[key](_props[key])];
      }
      return [...prevClasses, classNames[key]];
    }
    return prevClasses;
  }, []);
};

export const classNames: { [key: string]: string | any } = {
  root: "RuiLabelCollapseRoot",
};
