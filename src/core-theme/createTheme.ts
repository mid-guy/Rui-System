import { sizes, variants, backgrounds, animationframes } from "../components/ButtonBase/constants"
import { blue, green, pink, red } from "../core-colors/colors"
function createTheme(options?: any) {

    if (!options) return defaultTheme

    const outerTheme = mapValueKeys(options)
    const _outerTheme = _deepMerge(outerTheme, defaultTheme)
    return _outerTheme
}

function mapValueKeys(target: any) {
    Object.keys(target).forEach((key: string) => {
        if (typeof target[key] === "object" && !Array.isArray(target[key]) && target[key] !== null) {
            Object.assign(target[key], mapValueKeys(target[key]))
        }
        getStylesOverride(target, key)
    })
    Object.assign(target || {}, target)
    return target
}

function getStylesOverride(target: any, key: string) {
    if (Array.isArray(target[key])) {
        const style = target[key].map((item: { props: { [key: string]: string }, style: string }) => ({ [item.props[Object.keys(item.props)[0]]]: item.style }))
        Object.assign(target, { [key]: Object.assign({}, ...style) })
    }
}

function _deepMerge(target: any, source: any) {
    Object.keys(target).forEach((key): any => {
        if (typeof target[key] === "object" && !Array.isArray(target[key]) && target[key] !== null) {
            Object.assign(source[key], _deepMerge(target[key], source[key]))
        }
    });
    Object.assign(target || {}, source)
    return target
}

export const defaultTheme = {
    components: {
        button: {
            variants: variants,
            sizes: sizes,
            backgrounds: backgrounds
        },
    },
    palette: {
        primary: {
            main: blue[700],
            contrastText: "#FFF"
        },
        secondary: {
            main: pink["A400"],
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
    },
    animationframe: {
        button: {
            animationframe: animationframes
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        },
        down: function(breakpoint: "xs" | "sm" | "md" | "lg" | "xl") {
            return `@media (min-width: ${this.values[breakpoint]}px)`
        },
        up: function(breakpoint: "xs" | "sm" | "md" | "lg" | "xl") {
            return `@media (max-width: ${this.values[breakpoint]}px)`
        },
    },
    typography: {
        global: {
            fontSize: 16
        },
        fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'
        ].join(','),
        h1: {

        },
        h2: {

        },
        h3: {

        },
        h4: {

        },
        h5: {

        },
        h6: {

        },
        subtitle1: {
            fontSize: 12,
        },
        subtitle2: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
        },
        body2: {
            fontWeight: 500,
        }
    },
    transitions: {
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
    },
    spacing: {
        1: 16,
        2: 18,
        3: 20
    },
    zIndex: {}
}

export default createTheme

