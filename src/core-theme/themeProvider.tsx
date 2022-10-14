/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useContext, useMemo } from "react";
import {
  ButtonPropsAnimationFrame,
  ButtonPropsBackground,
  ButtonPropsSize,
  ButtonPropsVariant,
  OverridableStringUnion,
} from "../components/ButtonBase/ButtonBase";
import { defaultTheme } from "./createTheme";

export const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({
  children,
  theme,
}: {
  children: any;
  theme: any;
}) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _theme = useMemo(() => theme, []);
  return (
    <ThemeContext.Provider value={_theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

// type MigratePropsByKeys<A, B = "string"> =

type ThemeProps = {
  components: {
    button: {
      // variants: ButtonPropsVariant;
      // sizes: ButtonPropsSize;
      // backgrounds: ButtonPropsBackground;
    };
    // ...
  };
  // palette: {
  //   primary: {
  //     main: string;
  //     contrastText: string;
  //   };
  //   secondary: {
  //     main: string;
  //     contrastText: string;
  //   };
  //   success: {
  //     main: string;
  //     contrastText: string;
  //   };
  //   error: {
  //     main: string;
  //     contrastText: string;
  //   };
  //   text: {
  //     primary: string;
  //     secondary: string;
  //     disabled: string;
  //   };
  //   divider: string;
  //   action: {
  //     disabledBackground: string;
  //   };
  //   shape: {
  //     borderRadius: number;
  //   };
  // };
  // animationframe: {
  //   button: {
  //     animationframe: ButtonPropsAnimationFrame;
  //   };
  //   // ...
  // };
  // breakpoints: {
  //   values: BreakpointsValuesType;
  //   down: (breakpoint: BreakpointsValuesType) => string;
  //   up: (breakpoint: BreakpointsValuesType) => string;
  //   between: (breakpoint: BreakpointsValuesType) => string;
  // };
  // typography: any;
  // transitions: any;
  // spacing: any;
  // zIndex: any;
};

type BreakpointsValuesType = OverridableStringUnion<
  "xs" | "sm" | "md" | "lg" | "xl",
  BreakpointsValuesOverrides
>;
type BreakpointsValuesOverrides = {};

export default ThemeProvider;
