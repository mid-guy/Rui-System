import { ThemeProps, useTheme } from "../theme/themeProvider";
import { StylesOrCreatorType } from "../types/type";

const makeStyles = (stylesOrCreator: StylesOrCreatorType) => {
  return (props?: any) => {
    if (props && props instanceof Object)
      return stylesOrCreator({
        theme: useTheme() as ThemeProps,
        ...(props && { props }),
      });
    return stylesOrCreator(useTheme() as ThemeProps);
  };
};

export default makeStyles;
