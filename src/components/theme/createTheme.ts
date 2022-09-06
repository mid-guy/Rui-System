import { sizes, variants, backgrounds } from "../ButtonBase/constants"
function createTheme(options?: any) {
    let defaultTheme = {
        components: {
            button: {
                variants: variants,
                sizes: sizes,
                backgrounds: backgrounds
            },
            label: {

            },
            input: {

            }
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
        responsive: {},
        zIndex: {}
    }

    if (!options) return defaultTheme

    const outerTheme = _mapValueKeys(options)
    const _outerTheme = _deepMerge(outerTheme, defaultTheme)
    console.log(_outerTheme)
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

export default createTheme

