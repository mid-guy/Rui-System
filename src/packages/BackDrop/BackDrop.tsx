/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import { classNames, getBackDropCss } from "./getBackDropCss";

export type BackDropProps = {
  children: ReactNode;
  blankBackDrop?: boolean;
};

export default function BackDrop(props: BackDropProps) {
  const { children, blankBackDrop } = props;
  const theme = useTheme() as ThemeProps;
  const scopeBackDropCSS = getBackDropCss(theme, {
    blankBackDrop: blankBackDrop,
  });
  return (
    <div css={scopeBackDropCSS} className={classNames.root}>
      <div
        className={
          props.blankBackDrop
            ? classNames.blankBackDrop
            : classNames.overlayBackDrop
        }
      >
        {children}
      </div>
    </div>
  );
}
