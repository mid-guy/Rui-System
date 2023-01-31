import { SerializedStyles, css } from "@emotion/react";
import { ThemeProps } from "../../../core/theme/themeProvider";
import { OverlayPopoverCss } from "./OverlayPopover";

export const classNames: { [key: string]: string | any } = {
  root: "RuiOverlayPopoverRoot",
  mounting: "RuiOverlayPopoverMounting",
  unmount: "RuiOverlayPopoverUnMount",
};

export const generateOverlayPopoverClassNames = (props: {
  root: boolean;
  mounting: boolean;
  unmount: boolean;
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

export const getOverlayPopoverCss = (
  theme: ThemeProps,
  props: OverlayPopoverCss
): SerializedStyles => css`
  &.${classNames.root} {
    position: absolute;
    inset: 0px;
    background: white;
    border-radius: ${theme.palette.shape.borderRadius}px;
    z-index: 1;
    opacity: 0;
    transition: opacity 300ms ease-out;
    pointer-events: none;
    &.${classNames.mounting} {
      opacity: 0.5;
    }
  }
`;
