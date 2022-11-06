/** @jsxImportSource @emotion/react */
import { forwardRef, useImperativeHandle } from "react";
import { _onTouchRipple } from "../../core/helpers/generateRipple";
import { ThemeProps } from "../../core/theme/themeProvider";
import getButtonRippleCss from "./getButtonRippleCss";

export interface TouchRippleRefs {
  _onTouchRipple: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface TouchRippleProps {
  classesTouchRipple?: string;
  theme: ThemeProps;
}

const TouchRipple = forwardRef<TouchRippleRefs, TouchRippleProps>(
  (props, ref) => {
    useImperativeHandle(ref, () => ({ _onTouchRipple: _onTouchRipple }));
    const { theme, ...more } = props;
    const css = getButtonRippleCss(theme);
    return <span className="cds-ripple-root" css={css} {...more} />;
  }
);

export default TouchRipple;
