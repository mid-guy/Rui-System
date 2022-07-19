import { SerializedStyles } from '@emotion/react';
export interface ButtonCSSPropsTypeMap {
  variant: "primary" | "secondary"
}
export type ExtendButtonCSSProps = ((props: ButtonCSSPropsTypeMap) => SerializedStyles)
declare const getButtonCss: ExtendButtonCSSProps ;
export default getButtonCss