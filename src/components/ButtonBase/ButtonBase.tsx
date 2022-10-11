/** @jsxImportSource @emotion/react */
import getButtonCss, { generateButtonClassNames } from "./getButtonCss";
import React, { CSSProperties, forwardRef, ReactNode } from "react";
import { animationframes, backgrounds, types, variants } from "./constants";
import { useTheme } from "../../core-theme/themeProvider";

const ButtonBase = forwardRef(function (
  props: BaseProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const theme = useTheme();
  const {
    onClick,
    isVisible,
    animationframe,
    variant,
    size,
    fullWidth,
    disabled,
    background,
    cssOuter,
    className,
    ...rest
  } = props;
  const classes = generateButtonClassNames({
    root: true,
    fullWidth,
    disabled,
    size: size,
    background: background,
  });
  const css = getButtonCss(theme, props);
  return (
    <button
      {...rest}
      css={[css, cssOuter]}
      ref={ref}
      disabled={disabled}
      className={[classes, className].join(" ")}
      onClick={(e) => _onClick(e, animationframe, onClick)}
    />
  );
});

ButtonBase.defaultProps = {
  variant: "container",
  animationframe: "ripple",
  size: "sm",
  fullWidth: false,
  background: "primary",
  isVisible: false,
  type: "button",
};

function _onClick(
  e: any,
  animationframe: "ripple" | "scale" = "ripple",
  onClick: any
) {
  if (animationframe === "ripple") {
    generateRippleButton(e);
  }
  onClick && onClick(e);
}

function generateRippleButton(e: any) {
  const clientRect = e.nativeEvent;
  const x = clientRect.offsetX;
  const y = clientRect.offsetY;
  const ripple = document.createElement("span");
  e.target.appendChild(ripple);
  ripple.onanimationend = () => {
    ripple.remove();
  };
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
}

export interface ButtonPropsVariantOverrides {}
export interface ButtonPropsBackgroundOverrides {}
export interface ButtonPropsSizeOverrides {}
export interface ButtonPropsAnimationFrame {}
export type OverridableStringUnion<A, B> = A | keyof B;

export type ButtonPropsSize = OverridableStringUnion<
  "sm" | "md" | "lg",
  ButtonPropsSizeOverrides
>;

export type ButtonPropsBackground = OverridableStringUnion<
  keyof typeof backgrounds,
  ButtonPropsBackgroundOverrides
>;

export type BaseProps = {
  /**
   * The variant to use.
   * @default container
   */
  variant?: OverridableStringUnion<
    keyof typeof variants,
    ButtonPropsVariantOverrides
  >;
  /**
   * The size to use.
   * @default primary
   */
  background?: ButtonPropsBackground;
  /**
   * The size to use.
   * @default sm
   */
  size?: ButtonPropsSize;
  /**
   * the fullWidth to use
   * @default false
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
  dense?: any;
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
  animationframe?: OverridableStringUnion<
    keyof typeof animationframes,
    ButtonPropsAnimationFrame
  >;
  /**
   * The Style to use as html style.
   * @default {}
   */
  style?: CSSProperties;
  /**
   * The Style to use as html style.
   * @default {}
   */
  onClick?: any;
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
  cssOuter?: any;
};

export interface ButtonTypeMap<D extends React.ElementType = "button"> {
  props: BaseProps;
  defaultComponent: D;
}

export default ButtonBase;
