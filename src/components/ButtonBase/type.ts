import { OverrideProps } from "@mui/material/OverridableComponent";
import { variants } from "./getButtonCss";

export type ButtonVariant = {
  variant: "primary" | "secondary" | "ternary"
}

type BaseProps = {
  /**
   * The variant to use.
   * @default primary
   */
  variant?: keyof typeof variants;
};

export interface ButtonTypeMap<D extends React.ElementType = 'button'> {
  props: BaseProps;
  defaultComponent: D;
}

export type Props<
  D extends React.ElementType = ButtonTypeMap['defaultComponent']
> = OverrideProps<ButtonTypeMap<D>, D> & { component?: React.ElementType };