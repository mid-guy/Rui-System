/** @jsxImportSource @emotion/react */
import { getCss } from './getButtonCss'

const ButtonBase = ({children, variant}) => {
  // * it have to be an error below but it not :((
  const css = getCss()
  return <button css={css}>{children}</button>
}
export default ButtonBase