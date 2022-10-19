/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useContext, useMemo } from "react";
import {
  ButtonPropsVariant,
  ButtonPropsSize,
  ButtonPropsBackground,
  ButtonPropsTextColor,
  ButtonPropsOutlinedTheme,
  ButtonPropsAnimationFrame,
} from "../../packages/ButtonBase/ButtonBase";
import {
  WrapThemeProps,
  GenerateObjectByStringUnion,
  OverridableStringUnion,
} from "../types/type";
import { defaultTheme } from "./createTheme";

export const ThemeContext = createContext(defaultTheme);

type ThemeProviderProps = {
  children: ReactNode;
  theme: any;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
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

export type ThemeProps = {
  components: {
    button: {
      variants: WrapThemeProps<GenerateObjectByStringUnion<ButtonPropsVariant>>;
      sizes: WrapThemeProps<GenerateObjectByStringUnion<ButtonPropsSize>>;
      backgrounds: WrapThemeProps<
        GenerateObjectByStringUnion<ButtonPropsBackground>
      >;
      colors: WrapThemeProps<GenerateObjectByStringUnion<ButtonPropsTextColor>>;
      outlinedTheme: WrapThemeProps<
        GenerateObjectByStringUnion<ButtonPropsOutlinedTheme>
      >;
    };
    // ...
  };
  palette: {
    primary: {
      main: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      contrastText: string;
    };
    ternary: {
      main: string;
      contrastText: string;
    };
    success: {
      main: string;
      contrastText: string;
    };
    error: {
      main: string;
      contrastText: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    divider: string;
    action: {
      disabledBackground: string;
    };
    shape: {
      borderRadius: number;
    };
  };
  animationframe: {
    button: {
      animationframe: WrapThemeProps<
        GenerateObjectByStringUnion<ButtonPropsAnimationFrame>
      >;
    };
    // ...
  };
  breakpoints: {
    values: GenerateObjectByStringUnion<BreakpointsValuesProps, number>;
    down: (breakpoint: BreakpointsValuesProps) => string;
    up: (breakpoint: BreakpointsValuesProps) => string;
    between: (breakpoint: BreakpointsValuesProps) => string;
  };
  typography: any;
  transitions: {
    duration: {
      shortest: number;
      shorter: number;
      short: number;
      standard: number;
      complex: number;
      enteringScreen: number;
      leavingScreen: number;
    };
  };
  spacing: any;
  zIndex: any;
};

export type BreakpointsValuesProps = OverridableStringUnion<
  "xs" | "sm" | "md" | "lg" | "xl",
  BreakpointsValuesOverrides
>;
type BreakpointsValuesOverrides = {};

export default ThemeProvider;
