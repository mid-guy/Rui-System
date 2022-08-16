/** @jsxImportSource @emotion/react */
import { forwardRef } from 'react'
import { OverridableComponent, OverrideProps } from '../common/type'
import getButtonCss, { variants }  from './getButtonCss'

// const ButtonBase: OverridableComponent<ButtonTypeMap> = forwardRef(
//   function Button(props: Props, ref: React.Ref<HTMLButtonElement>) {
//     /* eslint-disable @typescript-eslint/no-unused-vars */
//   const theme = {}
//   const { variant, ...rest } = props
//   const css = getButtonCss(theme, props as any)
//   return ( <button css={css} {...rest} ref={ref} />)

//   }
// )

export default Button