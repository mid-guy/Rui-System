import {
  animationframes,
  backgrounds,
  colors,
  outlinedTheme,
  sizes,
  variants,
} from "../../packages/ButtonBase/constants";
import { blue, green, orange, pink, red } from "../colors/colors";
import { BreakpointsValuesProps, ThemeProps } from "./themeProvider";

export const palette = {
  primary: {
    main: blue[700],
    contrastText: "#FFF",
  },
  secondary: {
    main: pink["A400"],
    contrastText: "#FFF",
  },
  ternary: {
    main: orange["A400"],
    contrastText: "#FFF",
  },
  success: {
    main: green[800],
    contrastText: "#FFF",
  },
  error: {
    main: red[700],
    contrastText: "#FFF",
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  action: {
    disabledBackground: "rgba(0,0,0,0.12)",
  },
  shape: {
    borderRadius: 4,
  },
};

export const transitions = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195,
  },
};

export const typography = {
  global: {
    fontSize: 16,
    fontWeight: 500,
  },
  fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  h1: {
    fontSize: 32,
    fontWeight: 700,
  },
  h2: {
    fontSize: 24,
    fontWeight: 700,
  },
  h3: {
    fontSize: 18.72,
    fontWeight: 700,
  },
  h4: {
    fontSize: 16,
    fontWeight: 700,
  },
  h5: {
    fontSize: 13.28,
    fontWeight: 500,
  },
  h6: {
    fontSize: 10.72,
    fontWeight: 500,
  },
  subtitle1: {
    fontSize: 12,
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: 12,
    fontWeight: 500,
  },
  body1: {
    fontSize: 14,
    fontWeight: 500,
  },
  body2: {
    fontSize: 12,
    fontWeight: 500,
  },
};

export const spacing = {};

export const defaultTheme = {
  components: {
    button: {
      variants: variants,
      sizes: sizes,
      backgrounds: backgrounds,
      colors: colors,
      outlinedTheme: outlinedTheme,
    },
  },
  palette: palette,
  animationframe: {
    button: {
      animationframe: animationframes,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
    down: function (breakpoint: BreakpointsValuesProps) {
      return `@media (min-width: ${this.values[breakpoint]}px)`;
    },
    up: function (breakpoint: BreakpointsValuesProps) {
      return `@media (max-width: ${this.values[breakpoint]}px)`;
    },
    between: function (
      min: BreakpointsValuesProps,
      max: BreakpointsValuesProps
    ) {
      return `@media only screen and (min-width: ${this.values[min]}px) amd (max-width: ${this.values[max]}px)`;
    },
  },
  transitions: transitions,
  typography: typography,
  spacing: spacing,
  zIndex: {},
};

function createTheme(theme?: ThemeProps, options?: Object) {
  if (!theme) return defaultTheme;
  const outerTheme = merge(
    options ? theme : defaultTheme,
    options ? options : theme
  );
  return outerTheme;
}

const merge = (target: any, source: any) => {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], merge(target[key], source[key]));
    }
  }
  Object.assign(target || {}, source);
  return target;
};

export default createTheme;
