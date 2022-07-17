// export interface TextBaseTypeMap<P = {}, D extends React.ElementType = 'button'> 
// { 
//   props: { title: number, color: string },
//   defaultComponent: D
// }

// export interface OverridableTypeMap {
//   props: {};
//   defaultComponent: React.ElementType;
// }

export interface TextBaseTypeMap {
  title: string
}

export type ExtendTextBase = ((props: TextBaseTypeMap) => JSX.Element)
declare const Text: ExtendTextBase ;
export default Text