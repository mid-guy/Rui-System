import { backgrounds, sizes, variants } from "../ButtonBase/constants"

function createTheme(options: any = {}, ...args: any[]) {
    const { button } = options
    return {
        backgrounds: {
            ...backgrounds,
            ...(button.backgrounds && { [button.backgrounds[0].props.background]: button.backgrounds[0].style })
        },
        variants: {
            ...variants,
            ...(button.variants && { [button.variants[0].props.variant]: button.variants[0].style })
        },
        sizes: {
            ...sizes,
            ...(button.sizes && { [button.sizes[0].props.size]: button.sizes[0].style })
        }
    }
}
export default createTheme