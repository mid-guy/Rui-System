/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-empty-interface */
/** @jsxImportSource @emotion/react */
import { ThemeProps } from '@core/theme/themeProvider/themeProvider'
import { forwardRef, InputHTMLAttributes } from 'react'
import {
  OverridableMapType,
  OverridableStringUnion,
} from '../../core/types/type'
import getInputBaseCss, { generateInputBaseClassNames } from './getInputBaseCss'

const InputBase = forwardRef<HTMLInputElement, OverallInputBaseProps>(function (
  props,
  ref
) {
  const {
    variant,
    size,
    color,
    error,
    disabled,
    isFocused,
    innerTheme,
    ...rest
  } = props
  const scopeInputBaseClasses = generateInputBaseClassNames({
    inputBaseRoot: true,
    formControlRoot: true,
    focused: isFocused,
    variant: variant,
    size: size,
    color: color,
    error: error,
    disabled: disabled,
  })
  const scopeInputBaseCss = getInputBaseCss(innerTheme, {
    variant: variant,
    size: size,
    color: color,
    error: error,
    disabled: disabled,
  })
  const [inputBaseRootClasses, ...restScopeClasses] = scopeInputBaseClasses
  return (
    <div className={restScopeClasses.join(' ')} css={scopeInputBaseCss}>
      <input
        className={inputBaseRootClasses}
        disabled={disabled}
        ref={ref}
        {...rest}
      />
    </div>
  )
})

InputBase.defaultProps = {
  variant: 'outlined',
  size: 'sm',
  color: 'primary',
  error: false,
  isFocused: false,
}

export type OverallInputBaseProps = OverridableMapType<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'sizes'>,
  InputBaseProps
>

export interface InputBasePropsVariantOverrides {}
export interface InputBasePropsSizeOverrides {}
export interface InputBasePropsTextColorOverrides {}
export interface InputBasePropsBackgroundOverrides {}
export interface InputBasePropsOutlinedThemeOverrides {}
export interface InputBasePropsAnimationFrameOverrides {}

export type InputBaseProps = {
  variant?: InputBasePropsVariant
  size?: InputBasePropsSize
  color?: InputBasePropsTextColor
  error?: boolean
  disabled?: boolean
  isFocused?: boolean
  innerTheme: ThemeProps
}

export type InputBasePropsVariant = OverridableStringUnion<
  'filled' | 'text' | 'outlined',
  InputBasePropsVariantOverrides
>

export type InputBasePropsSize = OverridableStringUnion<
  'sm' | 'md' | 'lg',
  InputBasePropsSizeOverrides
>

export type InputBasePropsTextColor = OverridableStringUnion<
  'primary' | 'secondary' | 'ternary',
  InputBasePropsTextColorOverrides
>

InputBase.displayName = 'InputBase'

export default InputBase
