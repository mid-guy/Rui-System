/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonBase from "../ButtonBase";

test("render button", () => {
  render(<ButtonBase animationframe="ripple">This Test Button</ButtonBase>);
  const button = screen.getByRole("button", { name: "This Test Button" });
  expect(button).toBeInTheDocument();
});

test("render button variants as `container`", () => {
  render(
    <ButtonBase variant="container" animationframe="ripple">
      This Test Button
    </ButtonBase>
  );
  const button = screen.getByRole("button", { name: "This Test Button" });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("cds-button-Container");
  expect(button).toHaveStyle(`
    color: #FFF;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
  `);
});

test("render button variants as `text`", () => {
  render(
    <ButtonBase variant="text" color="primary" animationframe="ripple">
      This Test Button
    </ButtonBase>
  );
  const button = screen.getByRole("button", { name: "This Test Button" });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("cds-button-Text");
  expect(button).toHaveClass("cds-button-textPrimary");
});

test("render button variants as `outlined`", () => {
  render(
    <ButtonBase variant="outlined" animationframe="ripple">
      This Test Button
    </ButtonBase>
  );
  const button = screen.getByRole("button", { name: "This Test Button" });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("cds-button-Outlined");
});

test("render button animationframe as `ripple`", () => {
  render(
    <ButtonBase variant="outlined" animationframe="ripple">
      This Test Button
    </ButtonBase>
  );
  const button = screen.getByRole("button", { name: "This Test Button" });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("cds-button-Outlined");
  expect(button).toHaveClass("cds-button-animationRipple");
});

test("render button disabled", () => {
  render(
    <ButtonBase disabled={true} animationframe="ripple">
      This Test Button
    </ButtonBase>
  );
  const button = screen.getByRole("button", { name: "This Test Button" });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("cds-button-disabled");
});

test("behavior when adding more classnames", () => {
  render(
    <ButtonBase className="pl-10" animationframe="ripple">
      This Test Button
    </ButtonBase>
  );
  const button = screen.getByRole("button", { name: "This Test Button" });
  expect(button).toHaveClass("pl-10");
  expect(button).toBeInTheDocument();
});

test("behavior when visible", () => {
  render(
    <ButtonBase animationframe="ripple" isVisible={true}>
      This Test Button
    </ButtonBase>
  );
  const button = screen.getByRole("button", { name: "This Test Button" });
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("cds-button-visible");
  expect(button).toHaveStyle("display: inline-flex");
});

// test("behavior when hidden", () => {
//   render(
//     <ButtonBase animationframe="ripple" isVisible={false}>
//       This Test Button
//     </ButtonBase>
//   );
//   const button = screen.getByRole("button", { name: "This Test Button" });
//   expect(button).not.toBeInTheDocument();
//   // expect(button).toHaveClass("cds-button-visible");
//   // expect(button).toHaveStyle("display: none");
// });
