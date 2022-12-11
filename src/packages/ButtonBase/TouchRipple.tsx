/** @jsxImportSource @emotion/react */
import { ThemeProps } from "../../core/theme/themeProvider";
import getButtonRippleCss from "./getButtonRippleCss";
export interface TouchRippleProps {
  classesTouchRipple?: string;
  theme: ThemeProps;
}

const TouchRipple = (props: TouchRippleProps) => {
  const { theme, ...more } = props;
  const css = getButtonRippleCss(theme);
  return <span className="cds-ripple-root" css={css} {...more} />;
};

export default TouchRipple;
