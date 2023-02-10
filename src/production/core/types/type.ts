import { ThemeProps } from '@core/theme/themeProvider/themeProvider'
import { SerializedStyles } from '@emotion/react'

export type OverridableStringUnion<
  T extends string | number,
  U = {}
> = GenerateStringUnion<Overwrite<Record<T, true>, U>>

export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U

export type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never

export type GenerateStringUnion<T> = Extract<
  {
    [Key in keyof T]: true extends T[Key] ? Key : never
  }[keyof T],
  string
>

export type GenerateObjectByStringUnion<
  A extends string | number | symbol,
  B = 'string'
> = Record<A, B>

export type WrapThemeProps<A> = {
  [K in keyof A]: (theme: ThemeProps) => string
}

export type OverridableMapType<A, B> = MergeType<Omit<A, keyof B>, B>

export type MergeType<A, B> = A & B

export type StylesOrCreatorType = (theme: ThemeProps) => SerializedStyles
