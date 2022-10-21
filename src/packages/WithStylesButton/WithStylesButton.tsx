import { css } from "@emotion/react";
import withStyles from "../../core/styles/withStyles";
import { ThemeProps } from "../../core/theme/themeProvider";
import ButtonBase, { OverallButtonBaseProps } from "../ButtonBase/ButtonBase";

const useStyles = (theme: ThemeProps) => css`
  &.cds-button-sizeSm {
    background-color: red;
  }
`;

function WithStylesButton(props: any) {
  console.log(props);
  return <ButtonBase variant={"container"} {...props} />;
}

export default withStyles(useStyles)(WithStylesButton);
