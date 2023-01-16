/** @jsxImportSource @emotion/react */
import { forwardRef, useReducer, useState } from "react";
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
  const { variant, size, color, error, disabled, onFocus, onBlur, ...rest } =
    props;
  const [isFocused, setFocused] = useState<boolean>(false);
  const scopeInputBaseClasses = generateInputBaseClassNames({
    inputBaseRoot: true,
    formControlRoot: true,
    focused: isFocused,
    variant: variant,
    size: size,
    color: color,
    error: error,
    disabled: disabled,
  });
  const scopeInputBaseCss = getInputBaseCss(theme, {
    variant: variant,
    size: size,
    color: color,
    error: error,
    disabled: disabled,
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
        disabled={disabled}
        ref={ref}
        {...rest}
      />
    </div>
  );
});

InputBase.defaultProps = {
  variant: "outlined",
  size: "sm",
  color: "primary",
  error: false,
};

const inputFocusReducer = (state: any, action: any) => {
  switch (action.type) {
    case "FOCUS":
      return {};
    case "BLUR":
      return;
    default:
      return state;
  }
};
const initialInputFocus = {
  isFocus: false,
};

const useInputFocus = () => {
  const [state, dispatch] = useReducer(inputFocusReducer, initialInputFocus);
  return {
    state,
    dispatch,
  };
};
export type OverallInputBaseProps = OverridableMapType<
  Omit<React.HTMLProps<HTMLInputElement>, "sizes">,
  InputBaseProps
>;

export interface InputBasePropsVariantOverrides {}
export interface InputBasePropsSizeOverrides {}
export interface InputBasePropsTextColorOverrides {}
export interface InputBasePropsBackgroundOverrides {}
export interface InputBasePropsOutlinedThemeOverrides {}
export interface InputBasePropsAnimationFrameOverrides {}

export type InputBaseProps = {
  variant?: InputBasePropsVariant;
  size?: InputBasePropsSize;
  color?: InputBasePropsTextColor;
  error?: boolean;
  disabled?: boolean;
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
