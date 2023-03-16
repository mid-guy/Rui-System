/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react";
import { useTheme } from "../../core/theme/themeProvider";
import getStackCSS from "./getStackCSS";

const Stack = forwardRef<HTMLDivElement, StackProps>(function (props, ref) {
  const { children, direction, spacing, sx, ...rest } = props;
  const theme = useTheme();
  const scopeStackCSS = getStackCSS(theme);
  return (
    <div ref={ref} {...rest} css={scopeStackCSS}>
      {children}
    </div>
  );
});

type StackProps = {
  children: ReactNode;
  direction?:
    | {
        xs: StackDirection;
        sm: StackDirection;
        md: StackDirection;
        lg: StackDirection;
        xl: StackDirection;
      }
    | StackDirection;
  spacing?:
    | {
        xs: StackSpacing;
        sm: StackSpacing;
        md: StackSpacing;
        lg: StackSpacing;
        xl: StackSpacing;
      }
    | number;
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  sx?: string;
};

type StackDirection = "column" | "row" | "column-reverse" | "row-reverse";

type StackSpacing = number;

Stack.displayName = "Stack";

export default Stack;
