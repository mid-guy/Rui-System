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

export const overflowContent = (theme: ThemeProps, props: any) => `
  .${classNames.overflowContainer} {
    position: relative;
    overflow: auto;
    height: 100%;
    margin-right: -6px;
    color: rgba(0, 0, 0, 0);
    transition: color ${theme.transitions.duration.standard}ms ease-in-out;
    .${classNames.overflowContent} {
      padding-right: 6px;
    }
    &:hover {
      color: rgba(0, 0, 0, 0.3);
    }
    -webkit-text-fill-color: black;
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-thumb {
      width: 6px;
      border-radius: 13px;
      background-clip: padding-box;
      border: 1px solid transparent;
    }
    &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 0 5px;
    }
  }
`;

export const transitions = {
  elasticity: (theme: ThemeProps, props: any) => `
    height: ${
      props.popoverRect.height > props.maxHeight
        ? props.maxHeight
        : props.popoverRect.height
    }px;
    ${
      props.mounted &&
      `transition: height ${theme.transitions.duration.standard}ms ease-out;`
    }
  `,
};
