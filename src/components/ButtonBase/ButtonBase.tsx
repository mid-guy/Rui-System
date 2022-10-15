/** @jsxImportSource @emotion/react */
import getButtonCss, { generateButtonClassNames } from "./getButtonCss";
import React, {
  CSSProperties,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react";
import { types } from "./constants";
import { useTheme } from "../../core-theme/themeProvider";
import { SerializedStyles } from "@emotion/react";

type OverridableMapType<A, B> = MergeType<Omit<A, keyof B>, B>;

type MergeType<A, B> = A & B;

const ButtonBase = forwardRef(function (
  props: OverridableMapType<React.HTMLProps<HTMLButtonElement>, BaseProps>,
  ref: React.Ref<HTMLButtonElement>
) {
  const theme = useTheme();
  const {
    onClick,
    isVisible,
    animationframe,
    variant,
    size,
    color,
    background,
    outlinedTheme,
    fullWidth,
    disabled,
    cssOuter,
    className,
    children,
    startIcon,
    endIcon,
    ...rest
  } = props;
  const buttonClasses = generateButtonClassNames({
    root: true,
    variant: variant,
    size: size,
    ...(variant === "text" && {
      color: color
    }),
    ...(variant === "outlined" && {
      outlinedTheme: outlinedTheme
    }),
    ...(variant === "container" && {
      background: background }),
    animationframe: animationframe,
    fullWidth,
    disabled,
  });
  const css = getButtonCss(theme, props);
  const TouchRippleRef = useRef<TouchRippleRefs>(null);
  const withTouchRipple = (callback: any) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => { 
      TouchRippleRef.current?._onTouchRipple(e)
      callback && callback(e)
    }
  }
  console.log(css);
  return (
    <button
      {...rest}
      ref={ref}
      css={[css, cssOuter]}
      disabled={disabled}
      className={[buttonClasses, className].join("")}
      onClick={withTouchRipple(onClick)}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
      <TouchRipple ref={TouchRippleRef} />
    </button>
  );
});

export type TouchRippleRefs = {
  _onTouchRipple: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type TouchRippleProps = {};

const TouchRipple = forwardRef<TouchRippleRefs, TouchRippleProps>(
  (props, ref) => {
    useImperativeHandle(ref, () => ({ _onTouchRipple: _onTouchRipple }));
    function _onTouchRipple(e: React.MouseEvent<HTMLButtonElement>) {
      console.log("on-click");
      generateRippleButton(e)
    }
    return <span className="cds-ripple-root" />;
  }
);

ButtonBase.defaultProps = {
  variant: "container",
  animationframe: "ripple",
  size: "sm",
  fullWidth: false,
  color: "primary",
  background: "primary",
  outlinedTheme: "primary",
  isVisible: false,
  type: "button",
};

export interface ButtonPropsVariantOverrides {}
export interface ButtonPropsSizeOverrides {}
export interface ButtonPropsTextColorOverrides {}
export interface ButtonPropsBackgroundOverrides {}
export interface ButtonPropsOutlinedThemeOverrides {}
export interface ButtonPropsAnimationFrameOverrides {}
export type OverridableStringUnion<A, B> = A | keyof B;

export type ButtonPropsVariant = OverridableStringUnion<
  "container" | "outlined" | "text",
  ButtonPropsVariantOverrides
>;

export type ButtonPropsSize = OverridableStringUnion<
  "sm" | "md" | "lg",
  ButtonPropsSizeOverrides
>;

export type ButtonPropsTextColor = OverridableStringUnion<
  "primary" | "secondary" | "ternary",
  ButtonPropsTextColorOverrides
>;

export type ButtonPropsBackground = OverridableStringUnion<
  "primary" | "secondary" | "ternary",
  ButtonPropsBackgroundOverrides
>;

export type ButtonPropsOutlinedTheme = OverridableStringUnion<
  "primary" | "secondary" | "ternary",
  ButtonPropsOutlinedThemeOverrides
>;

export type ButtonPropsAnimationFrame = OverridableStringUnion<
  "ripple" | "scale",
  ButtonPropsAnimationFrameOverrides
>;

export type BaseProps = {
  /**
   * The variant to use.
   * @default container
   */
  variant?: ButtonPropsVariant;
  /**
   * The size to use.
   * @default primary
   */
  size?: ButtonPropsSize;
  /**
   * the color to use for variant="text"
   * @default primary
   */
  color?: ButtonPropsTextColor; 
  /**
   * the background to use for variant="container"
   * @default false
   */
  background?: ButtonPropsBackground;
  /**
   * The size to use.
   * @default sm
   */
  outlinedTheme?: ButtonPropsOutlinedTheme,
  /**
   * The size to use.
   * @default sm
   */
  fullWidth?: boolean;
  /**
   * the startIcon to add icon component
   * @default {}
   */
  startIcon?: ReactNode;
  /**
   * the endIcon to add icon component
   * @default {}
   */
  endIcon?: ReactNode;
  /**
   * the dense to use
   * @default sm
   */
  dense?: "sm" | "md" | "lg";
  /**
   * The disable to disable button.
   * @default false
   */
  disabled?: boolean;
  /**
   * The disableElevation to disable box-shadow.
   * @default false
   */
  disableElevation?: boolean;
  /**
   * The type to change type of button.
   * @default button
   */
  type?: keyof typeof types;
  /**
   * The visible to use that component should be visible
   * @default boolean
   */
  isVisible?: boolean;
  /**
   * The animation perform to use when user touch on button.
   * @default ripple
   */
  animationframe?: ButtonPropsAnimationFrame;
  /**
   * The Style to use as html style.
   * @default {}
   */
  style?: CSSProperties;
  /**
   * The Style to use as html style.
   * @default {}
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * className to use style
   * @default {}
   */
  className?: string;
  /**
   * Children to use
   * @default {}
   */
  children: ReactNode;
  cssOuter?: SerializedStyles;
};

export default ButtonBase;

// function _onClick(
//   e: any,
//   animationframe: "ripple" | "scale" = "ripple",
//   onClick: any
// ) {
//   if (animationframe === "ripple") {
//     generateRippleButton(e);
//   }
//   onClick && onClick(e);
// }

function generateRippleButton(e: any) {
  const clientRect = e.nativeEvent;
  const x = clientRect.offsetX;
  const y = clientRect.offsetY;
  const ripple = document.createElement("span");
  ripple.classList.add("cds-animation-ripple");
  const childNodes = e.target.childNodes
  const touchRippleComponent = childNodes[childNodes.length - 1]
  touchRippleComponent.appendChild(ripple);
  ripple.onanimationend = () => {
    ripple.remove();
  };
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
}
