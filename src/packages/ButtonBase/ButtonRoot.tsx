/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import { forwardRef } from "react";
import { ThemeProps } from "../../core/theme/themeProvider";
import { OverallButtonBaseProps } from "./ButtonBase";
import getButtonRootCss from "./getButtonRootCss";

const ButtonRoot = forwardRef<
  React.Ref<HTMLButtonElement>,
  OverallButtonBaseProps & {
    theme: ThemeProps;
    scopeButtonBaseClasses: string;
    scopeButtonBaseCSS: SerializedStyles;
  }
>(function (props, ref) {
  const {
    theme,
    className,
    scopeButtonBaseClasses,
    scopeButtonBaseCSS,
    outerCSS,
    children,
    ...more
  } = props;
  const scopeButtonRootCSS = getButtonRootCss(theme);
  return (
    <button
      ref={ref as any}
      className={["cds-button-root", scopeButtonBaseClasses, className].join(
        " "
      )}
      css={[scopeButtonRootCSS, scopeButtonBaseCSS, outerCSS]}
      {...more}
    >
      {children}
    </button>
  );
});

export default ButtonRoot;
