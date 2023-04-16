import { css } from "@emotion/react";
import makeStyles from "../../core/styles/makeStyles";
import { ThemeProps } from "../../core/theme/themeProvider";
import ButtonBase, {
  ButtonBaseProps,
} from "../../packages/ButtonBase/ButtonBase";

const useStyles = makeStyles(
  (theme: ThemeProps) => css`
    &.cds-button-sizeLg {
      background-color: green;
      ${theme.breakpoints.between("md", "lg")} {
        background-color: red;
      }
    }
  `
);

export default function LocalButton(props: any) {
  const classes = useStyles();
  return (
    <ButtonBase
      size="lg"
      variant={"container"}
      outerCSS={classes}
      {...(props as ButtonBaseProps)}
    />
  );
}
