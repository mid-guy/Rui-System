/** @jsxImportSource @emotion/react */
import { forwardRef, useState } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import InputBase from "../InputBase";
import { OverallInputBaseProps } from "../InputBase/InputBase";

const TextField = forwardRef<
  HTMLInputElement,
  Omit<OverallInputBaseProps, "ref" | "innerTheme">
>(function (props, ref) {
  const theme = useTheme() as ThemeProps;
  const { onFocus, onBlur, ...rest } = props;
  const [isFocused, setFocused] = useState<boolean>(false);
  function onFocusInput(onFocus?: Function) {
    setFocused(true);
    onFocus && onFocus();
  }
  function onBlurInput(onBlur?: Function) {
    setFocused(false);
    onBlur && onBlur();
  }
  return (
    <InputBase
      onFocus={() => onFocusInput(onFocus)}
      onBlur={() => onBlurInput(onBlur)}
      isFocused={isFocused}
      innerTheme={theme}
      ref={ref}
      {...rest}
    />
  );
});

TextField.displayName = "TextField";

export default TextField;
