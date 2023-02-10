import { css, SerializedStyles } from '@emotion/react'
import { ThemeProps } from '../../core/theme/themeProvider'

export const classNames: { [key: string]: string | any } = {
  root: 'RuiBackDropRoot',
  background: (background: any) => `RuiBackDropBackground${background}`,
}

export const getBackDropCss = (
  theme: ThemeProps,
  props: {
    background?: 'blank' | 'filled'
  }
): SerializedStyles => css`
  &.${classNames.root} {
    position: fixed;
    inset: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none; 
    .${classNames.background(props.background)} {
      ${
        props.background === 'blank' &&
        `
          position: relative;
          width: 100%;
          height: 100%;
        `
      }
      ${
        props.background === 'filled' &&
        `
          position: relative;
          width: 100%;
          height: 100%;
          pointer-events: none; 
        `
      }
    }
`
