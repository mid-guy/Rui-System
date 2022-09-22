/** @jsxImportSource @emotion/react */
import { useTheme } from "../../core-theme/themeProvider";
import getTextFieldCss from "./getTextField";
import "./InputBase.scss";
const TextField = ({ props }: any) => {
  const theme = useTheme();
  const css = getTextFieldCss(theme, props);
  return (
    <div css={css}>
      <input
        type="text"
        id="email"
        className="form__input"
        autoComplete="off"
        placeholder=" "
      />
      <label htmlFor="email" className="form__label">
        Email
      </label>
    </div>
  );
};

export default TextField;
