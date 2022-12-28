/** @jsxImportSource @emotion/react */
import { forwardRef, useState } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import {
  OverridableMapType,
  OverridableStringUnion,
} from "../../core/types/type";
import getInputBaseCss, {
  generateInputBaseClassNames,
} from "./getInputBaseCss";

const InputBase = forwardRef<HTMLInputElement, OverallInputBaseProps>(function (
  props,
  ref
) {
  const theme = useTheme() as ThemeProps;
  const { variant, size, onFocus, onBlur, ...rest } = props;
  const [isFocused, setFocused] = useState<boolean>(false);
  const scopeInputBaseClasses = generateInputBaseClassNames({
    inputBaseRoot: true,
    formControlRoot: true,
    inputBaseFocused: isFocused,
    size: size,
  });
  const scopeInputBaseCss = getInputBaseCss(theme, {
    variant: variant,
    size: size,
  });
  function onFocusInput() {
    setFocused(true);
  }
  function onBlurInput() {
    setFocused(false);
  }
  const [inputBaseRootClasses, ...restScopeClasses] = scopeInputBaseClasses;
  return (
    <div className={restScopeClasses.join(" ")} css={scopeInputBaseCss}>
      <input
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        className={inputBaseRootClasses}
        ref={ref}
        {...rest}
      />
    </div>
  );
});

InputBase.defaultProps = {
  variant: "outlined",
  size: "sm",
};

export type OverallInputBaseProps = OverridableMapType<
  React.HTMLProps<HTMLInputElement>,
  InputBaseProps
>;

export interface InputBasePropsVariantOverrides {}
export interface InputBasePropsSizeOverrides {}
export interface InputBasePropsTextColorOverrides {}
export interface InputBasePropsBackgroundOverrides {}
export interface InputBasePropsOutlinedThemeOverrides {}
export interface InputBasePropsAnimationFrameOverrides {}

export type InputBaseProps = {
  variant: InputBasePropsVariant;
  size?: InputBasePropsSize;
};

export type InputBasePropsVariant = OverridableStringUnion<
  "filled" | "text" | "outlined",
  InputBasePropsVariantOverrides
>;

export type InputBasePropsSize = OverridableStringUnion<
  "sm" | "md" | "lg",
  InputBasePropsSizeOverrides
>;

export type InputBasePropsTextColor = OverridableStringUnion<
  "primary" | "secondary" | "ternary",
  InputBasePropsTextColorOverrides
>;

InputBase.displayName = "InputBase";

export default InputBase;
