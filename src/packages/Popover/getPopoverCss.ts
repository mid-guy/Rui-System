import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
import capitalizeFirstLetter from "../../core/utils/capitalizeFirstLetter";
import { PopoverProps, PopoverPropsAnimationFrame, PopoverPropsTransitionStack, PopoverPropsTransitionContent } from "./Popover";
const getPopoverCss = (
  theme: ThemeProps,
  props: Omit<PopoverProps & { mounted: boolean, mounting: boolean }, "innerTheme" | "isVisible">
): SerializedStyles => css`
  &.${classNames.root} {
    position: absolute;
    width: calc(100% - ${theme.spacing(3)});
    padding: ${theme.spacing(1)} ${theme.spacing(1.5)};
    color: ${theme.palette.text.primary};
    .${classNames.overflowContainer} {
      position: relative; 
      overflow: auto;
      height: 100%;
      margin-right: -6px;
      color: rgba(0, 0, 0, 0);
      transition: color ${theme.transitions.duration.enteringScreen}ms ease-in;
      .${classNames.overflowContent} {
        padding-right: 6px;
      }
      &:hover {
        color: rgba(0, 0, 0, 0.3);
      }
      -webkit-text-fill-color: black;
      &::-webkit-scrollbar,
      &::-webkit-scrollbar-thumb {
        width: 6px;
        border-radius: 13px;
        background-clip: padding-box;
        border: 1px solid transparent;
      }
      &::-webkit-scrollbar-thumb {  
        box-shadow: inset 0 0 0 5px;
      }
    }
  }
  &.${classNames.transitionStack(props.transitionStack)} {
    ${theme.animationframe.popover.transitions[
    props.transitionStack as NonNullable<
      keyof typeof theme.animationframe.popover.transitions
    >
  ](theme, {
    popoverRect: props.popoverRect,
    maxHeight: props.maxHeight,
    mounted: props.mounted
  })};
  &.${classNames.animationFrame(props.animationframe)} {
    ${theme.animationframe.popover.animationframe[
    props.animationframe as NonNullable<
      keyof typeof theme.animationframe.popover.animationframe
    >
  ](theme, {
    mounting: props.mounting
  })};
  }
  &.${classNames.shape} {
    border-radius: ${theme.palette.shape.borderRadius}px;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
  }
} 
`;

export const generatePopoverClassNames = (props: {
  root: boolean,
  shape: boolean,
  animationFrame: boolean,
  transitionStack: PopoverPropsTransitionStack,
  transitionContent: PopoverPropsTransitionContent,
  mounted: boolean,
  mounting: boolean
}) => {
  const _props: { [key: string]: boolean | string } = props;
  return Object.keys(props)
    .reduce((prevClasses: any, key: any) => {
      if (_props[key]) {
        if (
          key === "animationFrame" || key === "transitionStack"
        ) {
          return [...prevClasses, classNames[key](_props[key])];
        }
        return [...prevClasses, classNames[key]];
      }
      return prevClasses;
    }, [])
    .join(" ");
};

export const classNames: { [key: string]: string | any } = {
  root: "RuiPopoverRoot",
  shape: "RuiPopoverShape",
  mounted: "RuiPopoverMounted",
  mounting: "RuiPopoverMounting",
  overflowContainer: "RuiOverflowContainer",
  overflowContent: "RuiOverflowContent",
  animationFrame: (value: PopoverPropsAnimationFrame): string => {
    return value && `RuiPopoverAnimation${capitalizeFirstLetter(value)}`;
  },
  transitionStack: (value: PopoverPropsAnimationFrame): string => {
    return value && `RuiPopoverTransitionStack${capitalizeFirstLetter(value)}`;
  }
};

export default getPopoverCss;