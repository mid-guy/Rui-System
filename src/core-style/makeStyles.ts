import { useTheme } from "../core-theme/themeProvider"
const makeStyles = (innerComponentProps: any) => {
  return (props?: any) => {
    if ( props ) return innerComponentProps({ theme: useTheme(), ...(props && {props})})
    return innerComponentProps(useTheme())
  }
}
export default makeStyles