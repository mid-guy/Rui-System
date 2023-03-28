/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import getRadioCss from "./getRadioCss";

const Radio = forwardRef<HTMLDivElement, any>(function (props, ref) {
  const { children, sx, label, ...rest } = props;
  const theme = useTheme() as ThemeProps;
  const scopeRadioCSS = getRadioCss(theme, {});
  return (
    <div className="RuiRadioRoot" {...rest} ref={ref} css={scopeRadioCSS}>
      <label className="RuiRadioLabel">
        <input className="RuiRadioInput" type="radio" name="radio" />
        <div className="RuiRadioTouchable" />
        <span className="RuiRadioContent">{label}</span>
      </label>
    </div>
  );
});

export default Radio;
