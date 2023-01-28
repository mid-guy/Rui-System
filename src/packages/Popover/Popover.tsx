/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import { forwardRef, useEffect, useRef } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import { OverridableStringUnion } from "../../core/types/type";
import OverlayPopover from "../OverlayPopover";
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
    isLoadingOptions,
    isUpdatingOptions,
    onCompleteChangeOptions,
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
    disable: isLoadingOptions,
    isUpdatingOptions: isUpdatingOptions,
  });
  const scopePopoverClasses = generatePopoverClassNames({
    root: true,
    shape: true,
    animationFrame: animationframe,
    transitionStack: transitionStack,
    transitionContent: "flash",
    mounted: isVisible,
    mounting: isVisible,
    disable: isLoadingOptions,
  });

  useEffect(() => {
    return () => onCompleteChangeOptions();
  }, []);

  return (
    <div
      className={[
        ...scopePopoverClasses.slice(0, 3),
        ...scopePopoverClasses.slice(4),
      ].join(" ")}
      css={[scopePopoverCSS]}
      onAnimationEnd={() => {
        isMounted.current = true;
        !isVisible && onAnimationEnd();
      }}
      ref={ref}
    >
      {isLoadingOptions && <OverlayPopover />}
      <div
        className={[classNames.paper, scopePopoverClasses[3]].join(" ")}
        onAnimationEnd={onCompleteChangeOptions}
      >
        <div className={classNames.overflowContainer}>{children}</div>
      </div>
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
