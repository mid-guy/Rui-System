import { orange } from './../../core-colors/colors';
import { blue, green, pink, red } from '../../core-colors/colors';
import { convertHEXtoRGB } from '../../utils/convertHEXtoRGB';
export const types = { button: "button", submit: "submit" };


export const palette = {
  primary: {
    main: blue[700],
    contrastText: "#FFF"
  },
  secondary: {
    main: pink["A400"],
    contrastText: "#FFF"
  },
  ternary: {
    main: orange["A400"],
    contrastText: "#FFF"
  },
  success: {
    main: green[800],
    contrastText: "#FFF"
  },
  error: {
    main: red[700],
    contrastText: "#FFF"
  },
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  action: {
    disabledBackground: "rgba(0,0,0,0.12)"
  },
  shape: {
    borderRadius: 4
  }
}

export const transitions = {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195,
  }
}

export const sizes = {
  sm: `
    padding: 6px 12px;
    font-size: 12px;
    height: 30px;
  `,
  md: `
    padding: 8px 16px;
    font-size: 14px;
    height: 36px;
  `,
  lg: `
    padding: 8px 24px;
    font-size: 16px;
    height: 42px;
  `,
};

export const animationframes = {
  ripple: `
    position: relative;
    overflow: hidden;
  `,
  scale: `
    transition-duration: ${transitions.duration.shortest}ms;
    &:active {
      transform: scale(0.95);
    }
  `
}

export const variants = {
  container: `
    color: ${palette.primary.contrastText};
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  `,
  outlined: `
    background: inherit;
  `,
  text: `
    background: inherit;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
  `,
};

export const colors = {
  primary: `
    color: ${palette.primary.main};
    &:hover {
      background: ${convertHEXtoRGB(palette.primary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${palette.primary.main};
    }
  `,
  secondary: `
    color: ${palette.secondary.main};
    &:hover {
      background: ${convertHEXtoRGB(palette.secondary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${palette.secondary.main};
    }
  `,
  ternary: `
    color: ${palette.ternary.main};
    &:hover {
      background: ${convertHEXtoRGB(palette.ternary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${palette.ternary.main};
    }
  `,
}

export const backgrounds = {
  primary: `
    background-color: ${palette.primary.main};
  `,
  secondary: `
    background-color: ${palette.secondary.main};
  `,
  ternary: `
    background-color: ${palette.ternary.main};
  `,
};

export const outlinedTheme = {
  primary: `
    border: 1px solid ${convertHEXtoRGB(palette.primary.main, 0.5)};
    color: ${palette.primary.main};
    &:hover {
      border: 1px solid ${palette.primary.main};
      background: ${convertHEXtoRGB(palette.primary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${palette.primary.main};
    }
  `,
  secondary: `
    border: 1px solid ${palette.secondary.main};
    color: ${palette.secondary.main};
    &:hover {
      border: 1px solid ${palette.secondary.main};
      background: ${convertHEXtoRGB(palette.secondary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${palette.secondary.main};
    }
  `,
  ternary: `
    border: 1px solid ${convertHEXtoRGB(palette.secondary.main, 0.5)};
    color: ${palette.ternary.main};
    &:hover {
      border: 1px solid ${palette.secondary.main};
      background: ${convertHEXtoRGB(palette.secondary.main, 0.04)};
    }
    .cds-ripple-root {
      background: ${palette.secondary.main};
    }
  `,

}
