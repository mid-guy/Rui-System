import { ThemeProps } from './../core-theme/themeProvider';
import { useTheme } from "../core-theme/themeProvider"
import { SerializedStyles } from '@emotion/react';
const makeStyles = (innerComponentProps: (theme: ThemeProps) => SerializedStyles) => {
  return (props?: any) => {
    if (props) return innerComponentProps({ theme: useTheme() as ThemeProps, ...(props && { props }) })
    return innerComponentProps(useTheme() as ThemeProps)
  }
}
export default makeStyles