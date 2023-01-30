import { ThemeProps } from "../../core/theme/themeProvider";
import { classNames } from "./getPopoverCss";

export const animationFrames = {
  slide: (theme: ThemeProps, props: any) => `
      top: ${props.popoverRect.y + 36}px;
      left: ${props.popoverRect.x}px;
      opacity: 0;
      transition: all ${
        props.mounting
          ? theme.transitions.duration.enteringScreen
          : theme.transitions.duration.leavingScreen
      }ms ease-out;
      ${
        props.mounting &&
        ` &.${classNames.mounting} {
            top: ${props.popoverRect.y + 4}px;
            opacity: 1;
          }
        `
      }
    `,
  expand: (theme: ThemeProps) => ``,
};

export const transitions = {
  elasticity: (theme: ThemeProps, props: any) => `
    height: ${
      props.popoverRect.height > props.maxHeight
        ? props.maxHeight
        : props.popoverRect.height
    }px;
    ${
      props.mounted &&
      `
      transition: height ${theme.transitions.duration.standard}ms ease-out;
    `
    }
  `,
};
