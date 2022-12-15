/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ButtonBase from "../ButtonBase";
import { onClickButton } from "../../../core/utils/onClickButton";

jest.mock("../../../core/utils/onClickButton");

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

test("behavior when click on Button", () => {
  render(<ButtonBase animationframe="ripple">This Test Button</ButtonBase>);
  const buttonBase = screen.getByRole("button", { name: "This Test Button" });
  userEvent.click(buttonBase);
  expect(onClickButton).toHaveBeenCalled();
  expect(onClickButton).toHaveBeenCalledTimes(1);
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

// test("behavior when click without callback", () => {
//   // ARRANGE
//   // const callbackAnimation = jest.fn((e) => _onTouchRipple(e));
//   render(<ButtonBase animationframe="ripple">This Test Button</ButtonBase>);

//   const button = screen.getByRole("button", { name: "This Test Button" });
//   userEvent.click(button);
//   // expect(callbackAnimation).toHaveBeenCalled();
//   expect(button).toHaveClass("cds-button-animationRipple");
//   expect(button).toBeInTheDocument();
// });

// call callback function when click
// test("behavior when click with callback", () => {
//   const callback = jest.fn((e: any) => {
//     callbackAnimation(e);
//   });
//   const callbackAnimation = jest.fn((e) => _onTouchRipple(e));
//   // const callback3 = jest.fn((e) => generateRippleButton(e));
//   // ARRANGE
