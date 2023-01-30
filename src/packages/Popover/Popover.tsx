/* eslint-disable react-hooks/exhaustive-deps */
/** @jsxImportSource @emotion/react */
import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  ReactNode,
} from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import { OverridableStringUnion } from "../../core/types/type";
import OverlayPopover from "./OverlayPopover";
import getPopoverCss, {
  classNames,
  generatePopoverClassNames,
} from "./getPopoverCss";

const Popover = forwardRef<HTMLDivElement, PopoverProps>(function (props, ref) {
  const {
    popoverRect,
    maxHeight = 100,
    animationframe = "slide",
    transitionStack = "elasticity",
    isVisible = false,
    children,
    onAnimationEnd,
    isLoadingOptions = false,
    isUpdatingOptions = false,
    cacheOptions = false,
    onCompleteChangeOptions,
    stackLoadOptions,
  } = props;
  const isMounted = useRef<boolean>(false);
  const isMounting = useRef<boolean>(false);
  const theme = useTheme() as ThemeProps;
  const scopePopoverCSS = getPopoverCss(theme, {
    popoverRect,
    maxHeight,
    animationframe: animationframe,
    transitionStack: transitionStack,
    transitionContent: "flash",
    mounted: isMounted.current,
    mounting: isMounting.current,
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

  useLayoutEffect(() => {
    isMounting.current = true;
    stackLoadOptions();
  }, []);

  useEffect(() => {
    return () => onCompleteChangeOptions();
  }, []);

  return (
    <div
      className={[
        ...scopePopoverClasses.slice(0, 3),
        ...scopePopoverClasses.slice(4),
      ]
        .filter((classes: string | undefined) => classes !== undefined)
        .join(" ")}
      css={[scopePopoverCSS]}
      onTransitionEnd={() => {
        isMounted.current = true;
        !isVisible && onAnimationEnd();
      }}
      ref={ref}
    >
      <OverlayPopover isLoadingOptions={isLoadingOptions} />
      <div
        className={[classNames.paper, scopePopoverClasses[3]].join(" ")}
        onAnimationEnd={() => onCompleteChangeOptions()}
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
    width: number;
    x: number;
    y: number;
  };
  cacheOptions?: boolean;
  isVisible: boolean;
  maxHeight?: number;
  animationframe?: PopoverPropsAnimationFrame;
  transitionStack?: PopoverPropsTransitionStack;
  transitionContent?: PopoverPropsTransitionContent;
  children: ReactNode;
  isLoadingOptions?: boolean;
  isUpdatingOptions?: boolean;
  onAnimationEnd: Function;
  onCompleteChangeOptions: Function;
  stackLoadOptions: Function;
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

Popover.displayName = "Popover";

export default Popover;
