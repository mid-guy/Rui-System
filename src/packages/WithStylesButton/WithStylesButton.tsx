import { css } from "@emotion/react";
import { forwardRef } from "react";
import withStyles from "../../core/styles/withStyles";
import { ThemeProps } from "../../core/theme/themeProvider";
import ButtonBase, { OverallButtonBaseProps } from "../ButtonBase/ButtonBase";

const useStyles = (theme: ThemeProps) => css`
  &.cds-button-sizeSm {
    background-color: red;
  }
`;

const WithStylesButton = forwardRef(function (
  props: OverallButtonBaseProps,
  ref: React.Ref<HTMLButtonElement>
) {
  return <ButtonBase variant={"container"} {...props} ref={ref} />;
});

export default withStyles(useStyles)(WithStylesButton);
