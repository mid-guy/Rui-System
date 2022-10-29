/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import ButtonBase from "../ButtonBase";
import { _onTouchRipple } from "../../../core/helpers/generateRipple";

// normal render
test("render button", () => {
  // ARRANGE
  render(<ButtonBase>This Test Button</ButtonBase>);

  const button = screen.getByRole("button", { name: "This Test Button" });

  expect(button).toBeInTheDocument();
});

test("render button variants as `container`", () => {
  // ARRANGE
  render(<ButtonBase variant="container">This Test Button</ButtonBase>);

  const button = screen.getByRole("button", { name: "This Test Button" });

  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("cds-button-Container");
});

test("render button variants as `text`", () => {
  // ARRANGE
  render(
    <ButtonBase variant="text" color="primary">
      This Test Button
    </ButtonBase>
  );

  const button = screen.getByRole("button", { name: "This Test Button" });

  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("cds-button-Text");
  expect(button).toHaveClass("cds-button-textPrimary");
});

test("render button variants as `outlined`", () => {
  // ARRANGE
  render(<ButtonBase variant="outlined">This Test Button</ButtonBase>);

  const button = screen.getByRole("button", { name: "This Test Button" });

  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("cds-button-Outlined");
});

test("render button animationframe as `ripple`", () => {
  // ARRANGE
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

// render disable button
test("render button disabled", () => {
  // ARRANGE
  render(<ButtonBase disabled={true}>This Test Button</ButtonBase>);

  const button = screen.getByRole("button", { name: "This Test Button" });

  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("cds-button-disabled");
});

test("behavior when click without callback", () => {
  // ARRANGE
  // const callbackAnimation = jest.fn((e) => _onTouchRipple(e));
  render(<ButtonBase animationframe="ripple">This Test Button</ButtonBase>);

  const button = screen.getByRole("button", { name: "This Test Button" });
  userEvent.click(button);
  // expect(callbackAnimation).toHaveBeenCalled();
  expect(button).toHaveClass("cds-button-animationRipple");
  expect(button).toBeInTheDocument();
});

// call callback function when click
test("behavior when click with callback", () => {
  const callback = jest.fn((e: any) => {
    callbackAnimation(e);
  });
  const callbackAnimation = jest.fn((e) => _onTouchRipple(e));
  // const callback3 = jest.fn((e) => generateRippleButton(e));
  // ARRANGE
  render(
    <ButtonBase onClick={(e) => callback(e)} animationframe="ripple">
      This Test Button
    </ButtonBase>
  );

  const button = screen.getByRole("button", { name: "This Test Button" });

  userEvent.click(button);

  expect(callback).toHaveBeenCalled();
  expect(callbackAnimation).toHaveBeenCalled();
  // expect(callback3).toHaveBeenCalled();
  expect(button).toHaveClass("cds-button-animationRipple");
  expect(button).toBeInTheDocument();
});

// call callback function when click
test("behavior when adding more classnames", () => {
  render(<ButtonBase className="pl-10">This Test Button</ButtonBase>);

  const button = screen.getByRole("button", { name: "This Test Button" });

  // expect(callbackAnimation).toHaveBeenCalled();
  expect(button).toHaveClass("pl-10");
  expect(button).toBeInTheDocument();
});

// test("behavior when Component have variant=`text` hover", () => {
//   render(
//     <ButtonBase variant="text" color="primary">
//       This Test Button
//     </ButtonBase>
//   );

//   const button = screen.getByRole("button", { name: "This Test Button" });

//   // expect(callbackAnimation).toHaveBeenCalled();
//   expect(button).toHaveClass("pl-10");
//   expect(button).toBeInTheDocument();
// });
