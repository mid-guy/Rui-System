import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
import capitalizeFirstLetter from "../../core/utils/capitalizeFirstLetter";
import { overflowContent } from "./constant";
import {
  PopoverProps,
  PopoverPropsAnimationFrame,
  PopoverPropsTransitionStack,
  PopoverPropsTransitionContent,
} from "./PopoverVer2";
const getPopoverCss = (
  theme: ThemeProps,
  props: Omit<
    PopoverProps & {
      disable: boolean;
      mounted: boolean;
      mounting: boolean;
    },
    | "innerTheme"
    | "isVisible"
    | "children"
    | "onAnimationEnd"
    | "onCompleteChangeOptions"
    | "stackLoadOptions"
  >
): SerializedStyles => css`
  &.${classNames.root} {
    position: absolute;
    pointer-events: auto;
    color: ${theme.palette.text.primary};
    width: ${props.popoverRect.width}px;
    .${classNames.paper} {
      position: relative;
      width: calc(100% - ${theme.spacing(3)});
      padding: ${theme.spacing(1)} ${theme.spacing(1.5)};
      &.${classNames.transitionStack(props.transitionStack)} {
        ${theme.animationframe.popover.transitions[
          props.transitionStack as NonNullable<
            keyof typeof theme.animationframe.popover.transitions
          >
        ](theme, {
          popoverRect: props.popoverRect,
          maxHeight: props.maxHeight,
          mounted: props.mounted,
        })};
      }
    }
    .${classNames.paper} {
      ${overflowContent(theme, props)}
    }
    &.${classNames.animationFrame(props.animationframe)} {
      ${theme.animationframe.popover.animationframe[
        props.animationframe as NonNullable<
          keyof typeof theme.animationframe.popover.animationframe
        >
      ](theme, {
        mounting: props.mounting,
        popoverRect: props.popoverRect,
      })};
    }
    &.${classNames.shape} {
      border-radius: ${theme.palette.shape.borderRadius}px;
      box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
        rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    }
  }
`;

export const generatePopoverClassNames = (props: {
  root: boolean;
  shape: boolean;
  animationFrame: PopoverPropsAnimationFrame;
  transitionStack: PopoverPropsTransitionStack;
  transitionContent: PopoverPropsTransitionContent;
  mounted: boolean;
  mounting: boolean;
  disable: boolean;
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
  root: "RuiPopoverRoot",
  shape: "RuiPopoverShape",
  mounted: "RuiPopoverMounted",
  mounting: "RuiPopoverMounting",
  paper: "RuiPaper",
  overflowContainer: "RuiPopoverOverflowContainer",
  overflowContent: "RuiPopoverOverflowContent",
  disable: "RuiPopoverDisabled",
  animationFrame: (value: PopoverPropsAnimationFrame): string => {
    return value && `RuiPopoverAnimation${capitalizeFirstLetter(value)}`;
  },
  transitionStack: (value: PopoverPropsAnimationFrame): string => {
    return value && `RuiPopoverTransitionStack${capitalizeFirstLetter(value)}`;
  },
};

export default getPopoverCss;
