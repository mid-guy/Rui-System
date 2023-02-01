import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../../core/theme/themeProvider";

export const getLabelCollapseCss = (
  theme: ThemeProps,
  props: any
): SerializedStyles => css`
  &.${classNames.root} {
  }
`;

export const generateLabelCollapseClassNames = (props: {
  root: boolean;
  mounted: boolean;
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
  root: "RuiCollapseRoot",
};
