import { css, SerializedStyles } from "@emotion/react";
import { BreakpointsValuesProps } from "../../core/theme/themeProvider";
import { GenerateObjectByStringUnion } from "../../core/types/type";

export default function getStackCSS(theme: any, props: any): SerializedStyles {
  return css`
    &.RuiStack {
      display: flex;
      flex-direction: ${props.direction};
    }
    ${getSpacing({
      breakpoints: theme.breakpoints,
      spacing: theme.spacing,
      spacingProps: props.spacing,
    })}
  `;
}

function getSpacing({
  breakpoints,
  spacing,
  spacingProps,
}: {
  breakpoints: {
    values: GenerateObjectByStringUnion<BreakpointsValuesProps, number>;
  };
  spacing: any;
  spacingProps: any;
}) {
  if (typeof spacingProps === "object") {
    return `
      &.RuiStackSpacing {
        ${getResponsiveSpacing({ spacingProps, breakpoints, spacing })}
      }
    `;
  }
  return `
    &.RuiStackSpacing {
      gap: ${spacing(spacingProps)}
    }
  `;
}

function getResponsiveSpacing({ spacingProps, breakpoints, spacing }: any) {
  let result = ``;
  for (let [breakpoint, value] of Object.entries(spacingProps)) {
    result += `
    ${breakpoints.down(breakpoint)} {
      gap: ${spacing(value)}
    }
    `;
  }
  console.log(result);
  return result;
}
