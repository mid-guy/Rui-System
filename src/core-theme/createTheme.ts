import { sizes, variants, backgrounds, animationframes } from "../components/ButtonBase/constants"
function createTheme(options?: any) {

    if (!options) return defaultTheme

    const outerTheme = _mapValueKeys(options)
    const _outerTheme = _deepMerge(outerTheme, defaultTheme)
    return _outerTheme
}

function _mapValueKeys(target: any) {
    Object.keys(target).forEach((key: string) => {
        if (typeof target[key] === "object" && !Array.isArray(target[key]) && target[key] !== null) {
            Object.assign(target[key], _mapValueKeys(target[key]))
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
            main: "red"
        },
        secondary: {
            main: "red 1"
        },
        ternary: {
            main: "red 2"
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
        }
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
    spacing: {},
    zIndex: {}
}

export default createTheme

