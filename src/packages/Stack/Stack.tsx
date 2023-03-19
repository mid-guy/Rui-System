/** @jsxImportSource @emotion/react */
import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import getStackCSS from "./getStackCSS";
import {
  BreakpointsValuesProps,
  GenerateObjectByStringUnion,
  OverridableMapType,
} from "../../core/types/type";
const Stack = forwardRef<HTMLDivElement, OverallStackProps>(function (
  props,
  ref
) {
  const {
    children,
    direction,
    alignItems,
    justifyContent,
    spacing = 2,
    sx,
    ...rest
  } = props;
  const theme = useTheme() as ThemeProps;
  const scopeStackCSS = getStackCSS(theme, {
    direction,
    alignItems,
    justifyContent,
    spacing,
    sx,
  });
  return (
    <div
      ref={ref}
      className="RuiStack RuiStackSpacing RuiStackDirection"
      css={scopeStackCSS}
      {...rest}
    >
      {children}
    </div>
  );
});

export type OverallStackProps = OverridableMapType<
  HTMLAttributes<HTMLDivElement>,
  StackProps
>;

export type StackProps = {
  children: ReactNode;
  direction?: StackDirection;
  spacing?: StackSpacing;
  justifyContent?: UnionStackJustifyContent;
  alignItems?: UnionStackAlignItems;
  sx?: string;
};

export type StackDirection =
  | UnionStackDirection
  | Partial<
      GenerateObjectByStringUnion<BreakpointsValuesProps, UnionStackDirection>
    >;

export type UnionStackAlignItems =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

export type UnionStackJustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type UnionStackDirection =
  | "column"
  | "row"
  | "column-reverse"
  | "row-reverse";

export type StackSpacing =
  | number
  | Partial<GenerateObjectByStringUnion<BreakpointsValuesProps, number>>;

Stack.displayName = "Stack";

export default Stack;
