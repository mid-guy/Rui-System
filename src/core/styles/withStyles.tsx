import { SerializedStyles } from "@emotion/react";
import React, { forwardRef, ReactNode } from "react";
import { ThemeProps } from "../theme/themeProvider";

const withStyles = (stylesOrCreator: stylesOrCreator) => {
  return function <T>(Component: React.ComponentType<T>) {
    const WithStyles = forwardRef(function WithStyles<
      P extends { children: ReactNode } & T
    >(props: P, ref: React.Ref<HTMLElement>) {
      if (process.env.NODE_ENV !== "production") {
        if (Component === undefined) {
          throw new Error(
            [
              "You are calling withStyles(styles)(Component) with an undefined component.",
              "You may have forgotten to import it.",
            ].join("\n")
          );
        }
      }
      return <Component {...props} cssOuter={stylesOrCreator} ref={ref} />;
    });
    return WithStyles;
  };
};

type stylesOrCreator = (theme: ThemeProps) =>
  | SerializedStyles
  | {
      [key: string]: (theme: ThemeProps) => SerializedStyles;
    };

export default withStyles;
