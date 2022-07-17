/** @jsxImportSource @emotion/react */
import getButtonCss from './getButtonCss/getButtonCss'

const ButtonBase = ({children, variant}) => {
  const css = getButtonCss({ variant: variant })
  return <button css={css}>{children}</button>
}
export default ButtonBase