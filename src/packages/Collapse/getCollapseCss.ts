import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "./../../core/theme/themeProvider";
export const getCollapseCss = (
  theme: ThemeProps,
  props: any
): SerializedStyles => css`
  &.${classNames.root} {
    overflow: hidden;
    width: 100%;
    height: ${props.isOpen ? props.rectQueue.height : 0}px;
    &.${classNames.mounted} {
      transition: height 500ms ease-in-out;
    }
  }
`;

export const generateCollapseClassNames = (props: {
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
  mounted: "RuiCollapseMounted",
};
