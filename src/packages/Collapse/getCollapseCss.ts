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
    opacity: ${props.isOpen ? 1 : 0};
    transform: translate3d(0px, ${props.isOpen ? 0 : 30}px, 0px);
    &.${classNames.mounted} {
      transition: all 400ms ease-in-out;
    }
    .${classNames.content} {
    }
  }
`;

// .${classNames.label} {
//   border-radius: ${theme.palette.shape.borderRadius}px;
//   background-color: red;
//   padding: ${theme.spacing(1)} ${theme.spacing(1.5)};
//   display: flex;
//   align-items: center;
// }

export const generateCollapseClassNames = (props: {
  root: boolean;
  mounted: boolean;
}) => {
  const _props: { [key: string]: boolean | string } = props;
  return Object.keys(props).reduce((prevClasses: any, key: any) => {
    if (_props[key]) {
      // if (key === "animationFrame" || key === "transitionStack") {
      //   return [...prevClasses, classNames[key](_props[key])];
      // }
      return [...prevClasses, classNames[key]];
    }
    return prevClasses;
  }, []);
};

export const classNames: { [key: string]: string | any } = {
  root: "RuiCollapseRoot",
  mounted: "RuiCollapseMounted",
  label: "RuiLabelCollapseRoot",
  content: "RuiContentCollapse",
};
