import {
  animationframes as buttonAnimationframes,
  backgrounds,
  colors,
  outlinedTheme,
  sizes,
  variants as buttonBaseVariants,
} from "../../packages/ButtonBase/constants";
import { blue, green, orange, pink, red } from "../colors/colors";
import { ThemeProps } from "./themeProvider";
import {
  variants as inputBaseVariants,
  sizes as inputBaseSizes,
  colors as inputBaseColors,
} from "../../packages/InputBase/constants";
import {
  animationFrames as popoverAnimationframes,
  transitions as popoverTransitions,
} from "../../packages/Popover/constant";
import { BreakpointsValuesProps } from "../types/type";

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
    borderWidth: 1,
    borderColor: {
      default: "rgba(0, 0, 0, 0.42)",
      hover: "rgba(0, 0, 0, 0.87)",
    },
    borderStyle: {
      solid: "solid",
    },
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

export const spacing = (space: number) => `${8 * space}px`;

export const defaultTheme = {
  components: {
    button: {
      variants: buttonBaseVariants,
      sizes: sizes,
      backgrounds: backgrounds,
      colors: colors,
      outlinedTheme: outlinedTheme,
    },
    input: {
      variants: inputBaseVariants,
      sizes: inputBaseSizes,
      colors: inputBaseColors,
    },
  },
  palette: palette,
  animationframe: {
    button: {
      animationframe: buttonAnimationframes,
    },
    popover: {
      animationframe: popoverAnimationframes,
      transitions: popoverTransitions,
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
