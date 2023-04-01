/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import { OverridableStringUnion } from "../../core/types/type";
import { useRadioGroupContext } from "../RadioGroup/RadioGroupProvider/RadioGroupProvider";
import getRadioCss from "./getRadioCss";

const Radio = forwardRef<HTMLDivElement, any>(function (props, ref) {
  const {
    children,
    sx,
    label,
    disabled,
    size = "sm",
    name: outerName,
    value: outerValue,
    ...rest
  } = props;
  const theme = useTheme() as ThemeProps;
  const context = useRadioGroupContext();
  const scopeRadioCSS = getRadioCss(theme, {
    size: size,
  });
  return (
    <div className="RuiRadioRoot" {...rest} ref={ref} css={scopeRadioCSS}>
      <label
        className={["RuiRadioLabel", disabled && "RuiRadioDisabled"].join(" ")}
      >
        <input
          className="RuiRadioInput"
          type="radio"
          name={context.value.name ? context.value.name : outerName}
          value={context.value.value ? context.value.value : outerValue}
          disabled={context.value.disabled ? context.value.disabled : disabled}
        />
        <div className={`RuiRadioTouchable`} />
        <span className="RuiRadioContent">{label}</span>
      </label>
    </div>
  );
});
export type RadioPropsSizeOverrides = {};

export type RadioPropsSize = OverridableStringUnion<
  "sm" | "md" | "lg",
  RadioPropsSizeOverrides
>;

export default Radio;
