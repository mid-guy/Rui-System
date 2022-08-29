/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import createTheme from "../theme/theme";
import getButtonCss from "./getButtonCss";
import { BaseProps } from "./type";

const theme = createTheme({
  button: {
    backgrounds: [
      {
        props: { variant: "dashed" },
        style: (theme: any) => css`
          background-color: red;
        `,
      },
    ],
  },
});

const ButtonBase = React.forwardRef(function Button(
  props: BaseProps,
  ref: React.Ref<HTMLButtonElement>
) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { variant, size, background, ...rest } = props;
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const theme = {};
  const css = getButtonCss(theme, props);

  return <button ref={ref} css={css} {...rest} />;
});

ButtonBase.defaultProps = {
  variant: "container",
  size: "sm",
  background: "primary",
  type: "button",
};

export default ButtonBase;
