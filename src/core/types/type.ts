import { SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../theme/themeProvider";

export type OverridableStringUnion<
  T extends string | number,
  U = {}
> = GenerateStringUnion<Overwrite<Record<T, true>, U>>;

export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

export type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never;
  }[keyof T],
  string
>;

export type GenerateObjectByStringUnion<
  A extends string | number | symbol,
  B = "string"
> = Record<A, B>;

export type WrapThemeProps<A> = {
  [K in keyof A]: (theme: ThemeProps) => string;
};

export type OverridableMapType<A, B> = MergeType<Omit<A, keyof B>, B>;

export type MergeType<A, B> = A & B;

export type StylesOrCreatorType = (theme: ThemeProps) => SerializedStyles;

export type TypographyFontSize<T extends string> = Record<
  T,
  { fontSize: number }
>;

export type BreakpointsValuesProps = OverridableStringUnion<
  "xs" | "sm" | "md" | "lg" | "xl",
  BreakpointsValuesOverrides
>;

type BreakpointsValuesOverrides = {};

export type BreakPoints = {
  values: GenerateObjectByStringUnion<BreakpointsValuesProps, number>;
  down: (breakpoint: BreakpointsValuesProps) => string;
  up: (breakpoint: BreakpointsValuesProps) => string;
  between: (min: BreakpointsValuesProps, max: BreakpointsValuesProps) => string;
};
