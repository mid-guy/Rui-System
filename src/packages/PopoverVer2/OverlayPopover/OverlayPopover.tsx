/** @jsxImportSource @emotion/react */

import { Fragment, ReactNode } from "react";
import { ThemeProps, useTheme } from "../../../core/theme/themeProvider";
import {
  generateOverlayPopoverClassNames,
  getOverlayPopoverCss,
} from "./getOverlayPopover";

export default function OverlayPopover(props: OverlayPopoverProps) {
  const { children = <Fragment />, isLoadingOptions, ...rest } = props;
  const theme = useTheme() as ThemeProps;
  const scopeOverlayPopoverCss = getOverlayPopoverCss(theme, {
    mounting: isLoadingOptions,
    unmount: !isLoadingOptions,
  });
  const scopeOverlayPopoverClasses = generateOverlayPopoverClassNames({
    root: true,
    mounting: isLoadingOptions,
    unmount: !isLoadingOptions,
  });
  return (
    <div
      className={scopeOverlayPopoverClasses.join(" ")}
      css={scopeOverlayPopoverCss}
      {...rest}
    >
      {children}
    </div>
  );
}

export type OverlayPopoverProps = {
  children?: ReactNode;
  isLoadingOptions: boolean;
};

export type OverlayPopoverCss = {
  mounting: boolean;
  unmount: boolean;
};
