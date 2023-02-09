/** @jsxImportSource @emotion/react */
import { SerializedStyles } from "@emotion/react";
import { forwardRef } from "react";
import { ThemeProps } from "../../core/theme/themeProvider";
import { OverallButtonBaseProps } from "./ButtonBase";
import getButtonRootCss, {
  mergeNameTargetComponent,
  RUI_BUTTON_ROOT,
} from "./getButtonRootCss";

const ButtonRoot = forwardRef<
  HTMLButtonElement,
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
      ref={ref}
      className={[RUI_BUTTON_ROOT, scopeButtonBaseClasses, className].join(" ")}
      data-testid={mergeNameTargetComponent("Test")}
      css={[scopeButtonRootCSS, scopeButtonBaseCSS, outerCSS]}
      {...more}
    >
      {children}
    </button>
  );
});

export default ButtonRoot;
