/** @jsxImportSource @emotion/react */

import getButtonCss from "./getButtonCss";
import { ReactNode } from "react";
import { backgrounds, sizes, types, variants } from "./constants";
import { useTheme } from "../../App";

const ButtonBase = function (props: BaseProps) {
  const theme = useTheme();
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { variant, size, background, ...rest } = props;
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const css = getButtonCss(theme, props);
  return <button css={css} {...rest} />;
};

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

  children: ReactNode;
};

export interface ButtonTypeMap<D extends React.ElementType = "button"> {
  props: BaseProps;
  defaultComponent: D;
}

export default ButtonBase;
