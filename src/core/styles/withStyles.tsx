import { forwardRef } from "react";
import { OverallButtonBaseProps } from "../../packages/ButtonBase/ButtonBase";

const withStyles = (stylesOrCreator: any) => (Component: any) => {
  const WithStyles = forwardRef(function WithStyles<P extends WithChildren, React.Ref<HTMLButtonElement>>(props, ref) {
    if (process.env.NODE_ENV !== "production") {
      if (Component === undefined) {
        throw new Error(
          [
            "You are calling withStyles(styles)(Component) with an undefined component.",
            "You may have forgotten to import it.",
          ].join("\n")
        );
      }
    }
    return <Component ref={ref} {...props} cssOuter={stylesOrCreator} />;
  });
  return WithStyles;
};

export default withStyles;

interface InjectedProps {
  someProp?: number;
}

type WithChildren = {
  children?: React.ReactNode;
};
