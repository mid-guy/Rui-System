import { SerializedStyles } from "@emotion/react";
import { ThemeProps, useTheme } from "../theme/themeProvider";
const makeStyles = (
  innerComponentProps: (theme: ThemeProps) => SerializedStyles
) => {
  return (props?: any) => {
    if (props)
      return innerComponentProps({
        theme: useTheme() as ThemeProps,
        ...(props && { props }),
      });
    return innerComponentProps(useTheme() as ThemeProps);
  };
};
export default makeStyles;
