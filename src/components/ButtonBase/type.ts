import { ReactNode } from "react";
import { variants, sizes, backgrounds, types } from "./getButtonCss";

export type BaseProps = {
  /**
   * The variant to use.
   * @default primary
   */
  variant: keyof typeof variants;
  /**
   * The size to use.
   * @default primary
   */
  background: keyof typeof backgrounds
  /**
   * The size to use.
   * @default sm
   */
  size: keyof typeof sizes
  /**
   * Define text to display in the button.
   */
  /**
   * The variant to use.
   * @default false
   */
  disabled?: boolean

  /**
   * The type to use.
   * @default button
   */
  type?: keyof typeof types

  children: ReactNode
};

export interface ButtonTypeMap<D extends React.ElementType = 'button'> {
  props: BaseProps;
  defaultComponent: D;
}