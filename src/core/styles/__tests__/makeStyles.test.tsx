import { defaultTheme } from "../../theme/createTheme";
import makeStyles from "../makeStyles";
import "@testing-library/jest-dom";
import { css } from "@emotion/react";

test("makeStyles", () => {
  const useStyles = makeStyles(
    (theme: any) => css`
      &.cds-button-sizeXxl {
        background-color: red;
      }
    `
  );
  const style = useStyles();
  expect(style).toBeCalled();
});
