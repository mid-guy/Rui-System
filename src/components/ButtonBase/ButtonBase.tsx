/** @jsxImportSource @emotion/react */
import getButtonCss from "./getButtonCss";
import { CSSProperties, forwardRef, ReactNode } from "react";
import {
  animationframes,
  backgrounds,
  sizes,
  types,
  variants,
} from "./constants";
import { useTheme } from "../../core-theme/themeProvider";

const ButtonBase = forwardRef(function (props: BaseProps, ref: any) {
  const theme = useTheme();
  const { onClick, isVisible, animationframe, ...rest } = props;
  const css = getButtonCss(theme, props);
  return (
    <button {...rest} css={css} ref={ref} onClick={generateRippleButton} />
  );
});

ButtonBase.defaultProps = {
  variant: "container",
  animationframe: "ripple",
  size: "sm",
  background: "primary",
  isVisible: false,
  type: "button",
};

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
export type OverridableStringUnion<A, B> = A | keyof B;

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
  background?: OverridableStringUnion<
    keyof typeof backgrounds,
    ButtonPropsBackgroundOverrides
  >;
  /**
   * The size to use.
   * @default sm
   */
  size?: keyof typeof sizes;
  /**
   * the dense to use
   * @default sm
   */
  dense?: any;
  /**
   * The variant to use.
   * @default false
   */
  disabled?: boolean;
  /**
   * The type to use.
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
  animationframe?: keyof typeof animationframes;
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
   * Children to use
   * @default {}
   */
  children: ReactNode;
};

export interface ButtonTypeMap<D extends React.ElementType = "button"> {
  props: BaseProps;
  defaultComponent: D;
}

export default ButtonBase;
