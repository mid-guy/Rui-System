/** @jsxImportSource @emotion/react */
import getButtonCss from "./getButtonCss";
import { CSSProperties, forwardRef, ReactNode } from "react";
import {
  animationFrames,
  backgrounds,
  sizes,
  types,
  variants,
} from "./constants";
import { useTheme } from "../../core-theme/themeProvider";
import { generateRippleButton } from "../../utils/generateRippleButton";

const ButtonBase = forwardRef(function (props: BaseProps, ref: any) {
  const theme = useTheme();
  const { onClick, ...rest } = props;
  const css = getButtonCss(theme, props);
  return (
    <button
      {...rest}
      css={css}
      ref={ref}
      onClick={(e) => generateRippleButton(e)}
    />
  );
});

ButtonBase.defaultProps = {
  variant: "container",
  animationFrame: "ripple",
  size: "sm",
  background: "primary",
  type: "button",
};

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
  animationFrame?: keyof typeof animationFrames;
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
