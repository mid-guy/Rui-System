/** @jsxImportSource @emotion/react */
import getButtonCss from "./getButtonCss";
import { CSSProperties, forwardRef, ReactNode } from "react";
import { backgrounds, sizes, types, variants } from "./constants";
import { useTheme } from "../core-theme/themeProvider";

const ButtonBase = forwardRef(function (props: BaseProps, ref: any) {
  const theme = useTheme();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { variant, size, background, disabled, isVisible, onClick, ...rest } =
    props;
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const css = getButtonCss(theme, props);
  const _onClick = (e: any) => withAnimation(e, onClick && onClick);
  return (
    <button
      css={css}
      disabled={disabled}
      {...rest}
      ref={ref}
      onClick={_onClick}
    />
  );
});

function withAnimation(e: any, onClick?: any) {
  console.log(e.nativeEvent);
  const clientRect = e.nativeEvent;
  const x = clientRect.offsetX;
  const y = clientRect.offsetY;
  const ripple = document.createElement("span");
  ripple.onanimationend = function () {
    e.target.remove(ripple);
  };

  e.target.appendChild(ripple);
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  onClick && onClick();
}

ButtonBase.defaultProps = {
  variant: "container",
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
   * The Style to use as html style.
   * @default {}
   */
  style?: CSSProperties;
  /**
   * Children to use
   * @default {}
   */
  onClick?: any;
  children: ReactNode;
};

export interface ButtonTypeMap<D extends React.ElementType = "button"> {
  props: BaseProps;
  defaultComponent: D;
}

export default ButtonBase;
