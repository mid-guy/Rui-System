export interface ButtonBaseTypeMap {
  children: React.ReactHTMLElement
  variant: "primary" | "secondary"
}
export type ExtendButtonBase = ((props: ButtonBaseTypeMap) => JSX.Element)
declare const ButtonBase: ExtendButtonBase ;
export default ButtonBase