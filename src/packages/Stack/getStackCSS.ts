import { css, SerializedStyles } from "@emotion/react";
import { ThemeProps } from "../../core/theme/themeProvider";
import {
  BreakPoints,
  BreakpointsValuesProps,
  GenerateObjectByStringUnion,
} from "../../core/types/type";
import { StackDirection, StackProps, StackSpacing } from "./Stack";

export default function getStackCSS(
  theme: ThemeProps,
  props: Omit<StackProps, "children">
): SerializedStyles {
  return css`
    &.RuiStack {
      display: flex;
      ${props.alignItems && `align-items: ${props.alignItems};`}
      ${props.justifyContent && `justify-content: ${props.justifyContent};`}
    }
    ${props.spacing &&
    getSpacing({
      breakpoints: theme.breakpoints,
      spacing: theme.spacing,
      spacingProps: props.spacing,
    })}
    ${props.direction &&
    getDirection({
      breakpoints: theme.breakpoints,
      directionProps: props.direction,
    })}
    ${props.sx && props.sx}
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
  spacing: (space: number) => string;
  spacingProps: StackSpacing;
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

function getDirection({
  breakpoints,
  directionProps,
}: {
  breakpoints: BreakPoints;
  directionProps: StackDirection;
}) {
  if (typeof directionProps === "object") {
    return `
      &.RuiStackDirection {
        ${getResponsiveDirection({ directionProps, breakpoints })}
      }
    `;
  }
  return `
    &.RuiStackDirection {
      flex-direction: ${directionProps};
    }
  `;
}

function getResponsiveDirection({
  directionProps,
  breakpoints,
}: {
  directionProps: StackDirection;
  breakpoints: BreakPoints;
}): string {
  let result = ``;
  for (let [breakpoint, value] of Object.entries(directionProps)) {
    result += `
    ${breakpoints.down(breakpoint as BreakpointsValuesProps)} {
      flex-direction: ${value};
    }
    `;
  }
  return result;
}

function getResponsiveSpacing({
  spacingProps,
  breakpoints,
  spacing,
}: any): string {
  let result = ``;
  for (let [breakpoint, value] of Object.entries(spacingProps)) {
    result += `
    ${breakpoints.down(breakpoint)} {
      gap: ${spacing(value)}
    }
    `;
  }
  return result;
}
