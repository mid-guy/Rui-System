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
  return (
    <ButtonBase
      size="xxl"
      variant={"container"}
      cssOuter={classes}
      {...props}
    />
  );
}
