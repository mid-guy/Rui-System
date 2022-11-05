import { css } from "@emotion/react";
import { forwardRef } from "react";
import withStyles from "../../core/styles/withStyles";
import { ThemeProps } from "../../core/theme/themeProvider";
import ButtonBase, {
  ButtonBaseProps,
  OverallButtonBaseProps,
} from "../ButtonBase/ButtonBase";

const useStyles = (theme: ThemeProps) => css`
  &.cds-button-sizeLg {
    background-color: red;
    ${theme.breakpoints.down("md")} {
      background-color: red;
    }
  }
`;

const WithStylesButton = forwardRef(function (
  props: OverallButtonBaseProps,
  ref: React.Ref<HTMLButtonElement>
) {
  return (
    <ButtonBase
      variant={"container"}
      size={"lg"}
      {...(props as ButtonBaseProps)}
      ref={ref}
    />
  );
});

export default withStyles(useStyles)(WithStylesButton);
