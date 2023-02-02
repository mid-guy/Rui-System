/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react";
import { ThemeProps } from "../../../core/theme/themeProvider";
import { classNames } from "../getCollapseCss";
const Label = forwardRef<
  HTMLDivElement,
  { children: ReactNode; root?: boolean; theme: ThemeProps }
>(function (props, ref) {
  return <div className={classNames.label}>{props.children}</div>;
});

Label.displayName = "Label";

export default Label;
