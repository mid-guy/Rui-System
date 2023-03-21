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
  InputBasePropsSize,
  InputBasePropsTextColor,
  InputBasePropsVariant,
} from "../../packages/InputBase/InputBase";
import { WrapThemeInputBaseProp } from "../types/InputBase/types";
import {
  WrapThemeProps,
  GenerateObjectByStringUnion,
  OverridableStringUnion,
  BreakpointsValuesProps,
  BreakPoints,
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
    input: {
      variants: WrapThemeProps<
        GenerateObjectByStringUnion<InputBasePropsVariant>
      >;
      sizes: WrapThemeInputBaseProp<
        GenerateObjectByStringUnion<InputBasePropsSize>,
        InputBasePropsVariant
      >;
      colors: WrapThemeProps<
        GenerateObjectByStringUnion<InputBasePropsTextColor>
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
      borderWidth: number;
      borderColor: {
        default: string;
        hover: string;
      };
      borderStyle: {
        solid: "solid";
      };
    };
  };
  animationframe: {
    button: {
      animationframe: WrapThemeProps<
        GenerateObjectByStringUnion<ButtonPropsAnimationFrame>
      >;
    };
    popover: {
      animationframe: any;
      transitions: any;
    };
    // ...
  };
  breakpoints: BreakPoints;
  typography: {
    global: {
      fontSize: number;
      fontWeight: number;
    };
    fontFamily: string;
  } & Record<
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2",
    { fontSize: number; fontWeight: number }
  >;
  transitions: {
    duration: Record<
      | "shortest"
      | "shorter"
      | "short"
      | "standard"
      | "complex"
      | "enteringScreen"
      | "leavingScreen",
      number
    >;
    timingFunction: {
      smooth: string;
    };
  };
  spacing: (space: number) => string;
  zIndex: any;
};

export default ThemeProvider;
