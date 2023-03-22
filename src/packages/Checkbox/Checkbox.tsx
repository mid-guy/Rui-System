/** @jsxImportSource @emotion/react */
import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import {
  OverridableMapType,
  OverridableStringUnion,
} from "../../core/types/type";
import { getCheckboxCss } from "./getCheckboxCss";

const Checkbox = forwardRef<HTMLInputElement, OverallCheckboxProps>(function (
  props,
  ref
) {
  const {
    label,
    value,
    name,
    checked,
    disabled = false,
    size = "md",
    ...rest
  } = props;
  const theme = useTheme() as ThemeProps;
  const scopeCheckboxCSS = getCheckboxCss(theme, {
    size: size,
    disabled: disabled,
  });
  return (
    <div className="RuiCheckboxRoot" ref={ref} css={scopeCheckboxCSS} {...rest}>
      <input
        className="RuiCheckboxInput"
        type="checkbox"
        id={name}
        name={name}
        value={value}
        disabled={disabled}
      />
      <label className="RuiCheckboxLabel" htmlFor={name}>
        <div
          className={[
            "RuiCheckboxTouchable",
            disabled && "RuiCheckboxTouchableDisabled",
          ].join(" ")}
        />
        <span className="RuiCheckboxContent">{label}</span>
      </label>
    </div>
  );
});

export type OverallCheckboxProps = OverridableMapType<
  Omit<HTMLAttributes<HTMLDivElement>, "size">,
  CheckboxProps
>;

export type CheckboxProps = {
  label: ReactNode;
  name: string;
  value: string | number;
  checked?: boolean;
  size?: CheckboxPropsSize;
  disabled?: boolean;
};

export type CheckboxPropsSizeOverrides = {};

export type CheckboxPropsSize = OverridableStringUnion<
  "sm" | "md" | "lg",
  CheckboxPropsSizeOverrides
>;

Checkbox.displayName = "RuiCheckbox";

export default Checkbox;
