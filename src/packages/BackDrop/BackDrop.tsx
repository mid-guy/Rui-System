/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import { classNames, getBackDropCss } from "./getBackDropCss";

export type BackDropProps = {
  children: ReactNode;
};

export default function BackDrop(props: BackDropProps) {
  const { children } = props;
  const theme = useTheme() as ThemeProps;
  const scopeBackDropCSS = getBackDropCss(theme);
  return (
    <div css={scopeBackDropCSS} className={classNames.root}>
      {children}
    </div>
  );
}
