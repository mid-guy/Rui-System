/** @jsxImportSource @emotion/react */
import { forwardRef, useLayoutEffect, useRef, ReactNode } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import { OverridableStringUnion } from "../../core/types/type";
import getPopoverCss, {
  classNames,
  generatePopoverClassNames,
} from "./getPopoverCss";

const PopoverVer2 = forwardRef<HTMLDivElement, PopoverProps>(function (
  props,
  ref
) {
  const {
    popoverRect,
    maxHeight = 100,
    animationframe = "slide",
    transitionStack = "elasticity",
    isVisible = false,
    children,
    isLoadingOptions = false,
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
        // !isVisible && onAnimationEnd();
      }}
      ref={ref}
    >
      <div className={[classNames.paper, scopePopoverClasses[3]].join(" ")}>
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
    x: number;
    y: number;
    width: number;
    height: number;
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

PopoverVer2.displayName = "PopoverVer2";

export default PopoverVer2;
