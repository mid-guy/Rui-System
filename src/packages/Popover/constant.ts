import { ThemeProps } from "../../core/theme/themeProvider";

const slide = `
  0% {
    opacity: 0;
    top: 150%;
  }
  100% {
    opacity: 1;
    top: calc(100% + 4px);
  }
`
export const animationFrames = {
  slide: (theme: ThemeProps, props: any) => `
    ${props.mounting ?
      `
        animation: slide-in ${theme.transitions.duration.enteringScreen}ms forwards;
        @keyframes slide-in {
          ${slide}
        }
      `
      :
      `
        animation: slide-out ${theme.transitions.duration.leavingScreen}ms forwards;
        animation-direction: reverse;
        @keyframes slide-out {
          ${slide}
        }
      `
    }
  `,
  expand: (theme: ThemeProps) => `
    animation: expand ${theme.transitions.duration.short}ms forwards;
    @keyframes expand {
      0% {
        width: 0px;
        height: 0px;
        opacity: 0.15;
      }
      100% {
        width: 500px;
        height: 500px;
        opacity: 0;
      }
    }
  `
}

export const transitions = {
  elasticity: (theme: ThemeProps, props: any) => `
    height: ${props.popoverRect.height > props.maxHeight ? props.maxHeight : props.popoverRect.height}px;
    ${props.mounted && `
      transition: height ${theme.transitions.duration.standard}ms ease-out;
    `}
  `
}