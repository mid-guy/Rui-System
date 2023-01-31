import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "./../../core/theme/themeProvider";
export const getCollapseCss = (
  theme: ThemeProps,
  props: any
): SerializedStyles => css`
  &.${classNames.root} {
    overflow: hidden;
    height: ${props.isOpen ? `${props.rectQueue.height}px` : "0px"}
      ${props.mounted &&
      `transition: height ${theme.transitions.duration.standard}ms ease-out;`};
  }
`;

export const generateCollapseClassNames = (props: { root: boolean }) => {
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
  // transitionStack: (value: PopoverPropsAnimationFrame): string => {
  //   return value && `RuiPopoverTransitionStack${capitalizeFirstLetter(value)}`;
  // },
};
