/** @jsxImportSource @emotion/react */
import getButtonCss, { generateButtonClassNames } from "./getButtonCss";
import { forwardRef, ReactNode, useRef } from "react";
import { types } from "./constants";
import { SerializedStyles } from "@emotion/react";
import {
  OverridableMapType,
  OverridableStringUnion,
} from "../../core/types/type";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import ButtonRoot from "./ButtonRoot";
import TouchRipple, { TouchRippleRefs } from "./TouchRipple";

const ButtonBase = forwardRef(function (
  props: OverallButtonBaseProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const theme = useTheme() as ThemeProps;
  const touchRippleRef = useRef<TouchRippleRefs | null>(null);
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
    outerCSS,
    children,
    startIcon,
    endIcon,
    ...rest
  } = props;

  const scopeButtonBaseClasses = generateButtonClassNames({
    variant: variant,
    size: size,
    ...(variant === "text" && {
      color: color,
    }),
    ...(variant === "outlined" && {
      outlinedTheme: outlinedTheme,
    }),
    ...(variant === "container" && {
      background: background,
    }),
    animationframe: animationframe,
    fullWidth,
    disabled,
    visible: isVisible,
  });

  const scopeButtonBaseCSS = getButtonCss(theme, props);

  return (
    <ButtonRoot
      ref={ref as any}
      theme={theme}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        touchRippleRef.current?.onCreateAnimation(e);
        onClick && onClick(e);
      }}
      disabled={disabled}
      scopeButtonBaseClasses={scopeButtonBaseClasses}
      scopeButtonBaseCSS={scopeButtonBaseCSS}
      outerCSS={outerCSS}
      {...rest}
    >
      {/* {startIcon && <StartIcon content={startIcon} />} */}
      {children}
      {/* {endIcon && <EndIcon content={endIcon} />} */}
      {animationframe === "ripple" && (
        <TouchRipple theme={theme} ref={touchRippleRef} />
      )}
    </ButtonRoot>
  );
});
export interface IconPropsType {
  content?: ReactNode;
}

// const StartIcon = (props: IconPropsType & { classesStartIcon?: string }) => {
//   const { content } = props;
//   return <div className={`cds-button-startIcon`}>{content}</div>;
// };

// const EndIcon = (props: IconPropsType & { classesEndIcon?: string }) => {
//   const { content } = props;
//   return <div className={`cds-button-endIcon`}>{content}</div>;
// };

ButtonBase.defaultProps = {
  variant: "container",
  animationframe: "ripple",
  size: "sm",
  fullWidth: false,
  color: "primary",
  background: "primary",
  outlinedTheme: "primary",
  isVisible: true,
  type: "button",
};

export type OverallButtonBaseProps = OverridableMapType<
  React.HTMLProps<HTMLButtonElement>,
  ButtonBaseProps
>;

export interface ButtonPropsVariantOverrides {}
export interface ButtonPropsSizeOverrides {}
export interface ButtonPropsTextColorOverrides {}
export interface ButtonPropsBackgroundOverrides {}
export interface ButtonPropsOutlinedThemeOverrides {}
export interface ButtonPropsAnimationFrameOverrides {}

export type ButtonPropsVariant = OverridableStringUnion<
  "container" | "text" | "outlined",
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

export type ButtonBaseProps = {
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
  outlinedTheme?: ButtonPropsOutlinedTheme;
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
   * The disable to disable button.
   * @default false
   */
  disabled?: boolean;
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
   * Children to use
   * @default {}
   */
  outerCSS?: SerializedStyles;
};

ButtonBase.displayName = "ButtonBase";
ButtonRoot.displayName = "ButtonRoot";

export default ButtonBase;
