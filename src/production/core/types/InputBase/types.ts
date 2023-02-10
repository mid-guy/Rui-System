import { ThemeProps } from "../../theme/themeProvider";

export type WrapThemeInputBaseProp<A, T> = {
  [K in keyof A]: (theme: ThemeProps, additional: T) => string;
};
