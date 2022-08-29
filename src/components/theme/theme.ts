import { css } from "@emotion/react";
import { backgrounds } from "../ButtonBase/getButtonCss";
function createTheme(options: any = {}, ...args: any[]) {
    const { button } = options
    // let muiTheme = {
    // }
    // return muiTheme;
    return {
        backgrounds: {
            ...backgrounds,
            [button.backgrounds[0].props.variant]: button.backgrounds[0].style
        }
    }
}
export default createTheme