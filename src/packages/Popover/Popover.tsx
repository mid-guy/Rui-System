/** @jsxImportSource @emotion/react */
import { forwardRef, useRef } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import { OverridableStringUnion } from "../../core/types/type";
import getPopoverCss, {
  classNames,
  generatePopoverClassNames,
} from "./getPopoverCss";

const Popover = forwardRef<any, any>(function (props, ref) {
  const {
    popoverRect,
    maxHeight = 100,
    animationframe = "slide",
    transitionStack = "elasticity",
    isVisible = false,
    children,
    onAnimationEnd,
  } = props;
  const isMounted = useRef<boolean>(false);
  const theme = useTheme() as ThemeProps;
  const scopePopoverCSS = getPopoverCss(theme, {
    popoverRect,
    maxHeight,
    animationframe: animationframe,
    transitionStack: transitionStack,
    transitionContent: "flash",
    mounted: isMounted.current,
    mounting: isVisible,
  });
  const scopePopoverClasses = generatePopoverClassNames({
    root: true,
    shape: true,
    animationFrame: animationframe,
    transitionStack: transitionStack,
    transitionContent: "flash",
    mounted: isVisible,
    mounting: isVisible,
  });
  return (
    <div
      className={scopePopoverClasses}
      css={[scopePopoverCSS]}
      onAnimationEnd={() => {
        isMounted.current = true;
        !isVisible && onAnimationEnd();
      }}
      ref={ref}
    >
      <div className={classNames.overflowContainer}>{children}</div>
    </div>
  );
});

export interface PopoverPropsAnimationFrameOverrides {}
export interface PopoverPropsTransitionStackOverrides {}
export interface PopoverPropsTransitionContentOverrides {}

export type PopoverProps = {
  popoverRect: {
    height: number;
  };
  isVisible: boolean;
  maxHeight: number;
  animationframe: PopoverPropsAnimationFrame;
  transitionStack: PopoverPropsTransitionStack;
  transitionContent: PopoverPropsTransitionContent;
};

export type PopoverPropsAnimationFrame = OverridableStringUnion<
  "slide" | "expand",
  PopoverPropsAnimationFrameOverrides
>;

export type PopoverPropsTransitionStack = OverridableStringUnion<
  "elasticity",
  PopoverPropsTransitionStackOverrides
>;

export type PopoverPropsTransitionContent = OverridableStringUnion<
  "flash",
  PopoverPropsTransitionContentOverrides
>;

export default Popover;
