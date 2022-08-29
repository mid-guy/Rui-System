/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import React from "react";
import createTheme from "../theme/theme";
import { backgrounds } from "./constants";
import getButtonCss from "./getButtonCss";
import { BaseProps } from "./type";

const theme = createTheme({
  button: {
    backgrounds: [
      {
        props: { background: "dashed" },
        style: (theme: any): SerializedStyles => css`
          background-color: blue;
          color: red;
        `,
      },
    ],
  },
});

interface GenericBackgroundType<T> {
  T: (theme: any) => SerializedStyles;
}

const ButtonBase = React.forwardRef(function Button(
  props: {
    background: GenericBackgroundType<typeof backgrounds>;
    [key: string]: any;
  },
  // props: BaseProps,
  ref: React.Ref<HTMLButtonElement>
) {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { variant, size, background, ...rest } = props;
  /* eslint-enable @typescript-eslint/no-unused-vars */
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
