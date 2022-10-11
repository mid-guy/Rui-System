import { css } from "@emotion/react";
import makeStyles from "../../core-style/makeStyles";
import ButtonBase from "../ButtonBase/ButtonBase";
const useStyles = makeStyles(
  (theme: any) => css`
    &.cds-button-sizeXxl {
      background-color: red;
    }
  `
);
export default function LocalButton(props: any) {
  const classes = useStyles();
  console.log(classes);
  return (
    <ButtonBase {...props} cssOuter={classes} size="xxl" variant="contained" />
  );
}
