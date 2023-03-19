/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import { ThemeProps, useTheme } from "../../core/theme/themeProvider";
import { getCheckboxCss } from "./getCheckboxCss";

const Checkbox = forwardRef<HTMLInputElement, any>(function (props, ref) {
  const { label, value, name, checked, ...rest } = props;
  const theme = useTheme() as ThemeProps;
  const scopeCheckboxCSS = getCheckboxCss(theme, {});
  return (
    <div className="RuiCheckboxRoot" ref={ref} css={scopeCheckboxCSS} {...rest}>
      <input
        className="RuiCheckboxInput"
        type="checkbox"
        id={name}
        name={name}
        value={value}
        checked={checked}
      />
      <label className="RuiCheckboxLabel" htmlFor={name}>
        <span></span>
        {label}
        {/* <ins></ins>
          <i>{label}</i>
        </ins> */}
      </label>
    </div>
  );
});

export default Checkbox;
