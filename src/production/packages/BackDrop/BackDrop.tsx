/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import { classNames, getBackDropCss } from "./getBackDropCss";

export type BackDropProps = {
  children: ReactNode;
  background?: "blank" | "filled";
};

export default function BackDrop(props: BackDropProps) {
  const { children, background } = props;
  const theme = useTheme() as ThemeProps;
  const scopeBackDropCSS = getBackDropCss(theme, {
    background: background,
  });
  return (
    <div css={scopeBackDropCSS} className={classNames.root}>
      <div className={classNames.background(props.background)}>{children}</div>
    </div>
  );
}
