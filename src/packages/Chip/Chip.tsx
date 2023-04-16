/** @jsxImportSource @emotion/react */
import { HTMLAttributes, forwardRef } from "react";
import {
  OverridableMapType,
  OverridableStringUnion,
} from "../../core/types/type";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import getChipCss from "./getChipCss";

const Chip = forwardRef<HTMLDivElement, OverallChipProps>(function (
  props,
  ref
) {
  const {
    label,
    onClick,
    disabled = false,
    size = "sm",
    color = "default",
    children,
    ...rest
  } = props;
  const theme = useTheme() as ThemeProps;
  const scopeChipCSS = getChipCss(theme, {
    size,
    color,
  });
  return (
    <div
      className={[
        "RuiChip",
        "RuiChipColor",
        "RuiChipSize",
        disabled && "RuiChipDisabled",
      ].join(" ")}
      ref={ref}
      onClick={onClick}
      css={scopeChipCSS}
      {...rest}
    >
      {label}
    </div>
  );
});

export default Chip;

export type ChipPropsVariantOverrides = {};
export type ChipPropsSizeOverrides = {};
export type ChipPropsColorOverrides = {};

export type ChipPropsVariant = OverridableStringUnion<
  "filled" | "outlined",
  ChipPropsVariantOverrides
>;

export type ChipPropsSize = OverridableStringUnion<
  "sm" | "md",
  ChipPropsSizeOverrides
>;

export type ChipPropsColor = OverridableStringUnion<
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning",
  ChipPropsColorOverrides
>;

export type OverallChipProps = OverridableMapType<
  Omit<HTMLAttributes<HTMLDivElement>, "size">,
  ChipProps
>;

export type ChipProps = {
  label?: string;
  disabled?: boolean;
  variant?: ChipPropsVariant;
  size?: ChipPropsSize;
  color?: ChipPropsColor;
};
