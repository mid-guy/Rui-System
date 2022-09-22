export interface OverridableTypeMap {
  props: {};
  defaultComponent: React.ElementType;
}

export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/**
 * Props of the component if `component={Component}` is used.
 */
// prettier-ignore
export type OverrideProps<
  M extends OverridableTypeMap,
  C extends React.ElementType
> = (
    & BaseProps<M>
    & DistributiveOmit<React.ComponentPropsWithRef<C>, keyof BaseProps<M>>
  );

export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;

export interface StyledComponentProps<ClassKey extends string = string> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ClassNameMap<ClassKey>>;
}

/**
 * Props that are valid for material-ui components.
  */
// each component declares it's classes in a separate interface for proper JSDoc.
export interface CommonProps extends StyledComponentProps<never> {
  className?: string;
  style?: React.CSSProperties;
}

// prettier-ignore
export type DefaultComponentProps<M extends OverridableTypeMap> =
  & BaseProps<M>
  & DistributiveOmit<React.ComponentPropsWithRef<M['defaultComponent']>, keyof BaseProps<M>>;

// prettier-ignore
export type BaseProps<M extends OverridableTypeMap> =
  & M['props']
  & CommonProps;

export interface OverridableComponent<M extends OverridableTypeMap> {
  <C extends React.ElementType>(
    props: {
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: C;
    } & OverrideProps<M, C>,
  ): JSX.Element;
  (props: DefaultComponentProps<M>): JSX.Element;
}


export interface OverridableTypeMap {
  props: {};
  defaultComponent: React.ElementType;
  classKey: string;
}