/** @jsxImportSource @emotion/react */
import { forwardRef, ReactNode } from "react";
import { ThemeProps } from "../../../core/theme/themeProvider";
import {
  generateLabelCollapseClassNames,
  getLabelCollapseCss,
} from "./getLabelCollapseCss";
const Label = forwardRef<
  HTMLDivElement,
  { children: ReactNode; root?: boolean; theme: ThemeProps }
>(function (props, ref) {
  const scopeLabelCollapseClasses = generateLabelCollapseClassNames({
    root: true,
  });
  const scopeLabelCollapseCSS = getLabelCollapseCss(props.theme, {});
  return (
    <div
      className={scopeLabelCollapseClasses.join(" ")}
      css={scopeLabelCollapseCSS}
    >
      {props.children}
    </div>
  );
});

Label.displayName = "Label";

export default Label;
