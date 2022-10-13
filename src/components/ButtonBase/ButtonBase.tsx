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
import { css, SerializedStyles } from "@emotion/react";

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
    fullWidth,
    disabled,
    background,
    cssOuter,
    className,
    children,
    startIcon,
    endIcon,
    ...rest
  } = props;
  const classes = generateButtonClassNames({
    root: true,
    fullWidth,
    disabled,
    variant: variant,
    size: size,
    background: background,
    animationframe: animationframe,
  });
  const css = getButtonCss(theme, props);
  const TouchRippleRef = useRef<TouchRippleRefs>(null);
  return (
    <button
      {...rest}
      ref={ref}
      css={[css, cssOuter]}
      disabled={disabled}
      className={[classes, className].join("")}
      onClick={() => TouchRippleRef.current?._onTouchRipple()}
    >
      {startIcon && startIcon}
      {children}
      <TouchRipple ref={TouchRippleRef} />
      {endIcon && endIcon}
    </button>
  );
});

const cssRipple = css`
  &.cds-ripple-root {
    position: absolute;
    background: white;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: ripples 650ms linear;
    @keyframes ripples {
      0% {
        width: 0px;
        height: 0px;
        opacity: 0.25;
      }
      100% {
        width: 500px;
        height: 500px;
        opacity: 0;
      }
    }
  }
`;

export type TouchRippleRefs = {
  _onTouchRipple: () => void;
};

type TouchRippleProps = {};

const TouchRipple = forwardRef<TouchRippleRefs, TouchRippleProps>(
  (props, ref) => {
    useImperativeHandle(ref, () => ({ _onTouchRipple: _onTouchRipple }));
    function _onTouchRipple() {
      console.log("on-click");
    }
    return <span css={cssRipple} className="cds-ripple-root" />;
  }
);

ButtonBase.defaultProps = {
  variant: "container",
  animationframe: "ripple",
  size: "sm",
  fullWidth: false,
  background: "primary",
  isVisible: false,
  type: "button",
};

export interface ButtonPropsVariantOverrides {}
export interface ButtonPropsBackgroundOverrides {}
export interface ButtonPropsSizeOverrides {}
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

export type ButtonPropsBackground = OverridableStringUnion<
  "primary" | "secondary" | "ternary",
  ButtonPropsBackgroundOverrides
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
  onClick?: React.MouseEvent<HTMLButtonElement>;
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

// function generateRippleButton(e: any) {
//   const clientRect = e.nativeEvent;
//   const x = clientRect.offsetX;
//   const y = clientRect.offsetY;
//   const ripple = document.createElement("span");
//   e.target.appendChild(ripple);
//   ripple.onanimationend = () => {
//     ripple.remove();
//   };
//   ripple.style.left = `${x}px`;
//   ripple.style.top = `${y}px`;
// }
