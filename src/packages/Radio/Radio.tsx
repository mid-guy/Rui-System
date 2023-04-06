/** @jsxImportSource @emotion/react */
import { HTMLAttributes, forwardRef } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import {
  BreakpointsValuesProps,
  GenerateObjectByStringUnion,
  OverridableMapType,
  OverridableStringUnion,
} from "../../core/types/type";
import { useRadioGroupContext } from "../RadioGroup/RadioGroupProvider/RadioGroupProvider";
import getRadioCss from "./getRadioCss";

const Radio = forwardRef<HTMLDivElement, OverallRadioProps>(function (
  props,
  ref
) {
  const {
    sx,
    label,
    disabled,
    size = "sm",
    color = "primary",
    name,
    value,
    ...rest
  } = props;
  const theme = useTheme() as ThemeProps;
  const context = useRadioGroupContext();
  const scopeRadioCSS = getRadioCss(theme, {
    size: context.value.size ? context.value.size : size,
    disabled: context.value.disabled ? context.value.disabled : disabled,
    color: context.value.color ? context.value.color : color,
    sx: context.value.sx ? context.value.sx : sx,
  });
  return (
    <div className="RuiRadioRoot" {...rest} ref={ref} css={scopeRadioCSS}>
      <label
        className={["RuiRadioLabel", disabled && "RuiRadioDisabled"].join(" ")}
      >
        <input
          className="RuiRadioInput"
          type="radio"
          name={context.value.name ? context.value.name : name}
          value={context.value.value ? context.value.value : value}
          disabled={context.value.disabled ? context.value.disabled : disabled}
        />
        <div className="RuiRadioTouchable" />
        <span className="RuiRadioContent">{label}</span>
      </label>
    </div>
  );
});

export type OverallRadioProps = OverridableMapType<
  Omit<HTMLAttributes<HTMLDivElement>, "size">,
  RadioProp
>;

export type RadioProp = {
  name?: string;
  value?: string | number;
  sx?: string;
  label?: string;
  disabled?: boolean;
  size?: RadioResponsiveSize;
  color?: RadioResponsiveColor;
};

export type RadioResponsiveSize =
  | RadioPropsSize
  | Partial<
      GenerateObjectByStringUnion<BreakpointsValuesProps, RadioPropsSize>
    >;

export type RadioResponsiveColor =
  | RaidoPropsColor
  | Partial<
      GenerateObjectByStringUnion<BreakpointsValuesProps, RaidoPropsColor>
    >;

export type RadioPropsSizeOverrides = {};
export type RadioPropsColorOverrides = {};

export type RadioPropsSize = OverridableStringUnion<
  "sm" | "md" | "lg",
  RadioPropsSizeOverrides
>;

export type RaidoPropsColor = OverridableStringUnion<
  "primary" | "secondary" | "ternary",
  RadioPropsColorOverrides
>;

export default Radio;
