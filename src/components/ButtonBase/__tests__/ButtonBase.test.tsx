import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import ButtonBase from "../ButtonBase";

// normal render
test("render button", () => {
  // ARRANGE
  render(<ButtonBase>This Test Button</ButtonBase>);

  const button = screen.getByRole("button", { name: "This Test Button" });

  expect(button).toBeInTheDocument();
});

// render disable button
test("render button disabled", () => {
  // ARRANGE
  render(<ButtonBase disabled={true}>This Test Button</ButtonBase>);

  const button = screen.getByRole("button", { name: "This Test Button" });

  expect(button).toBeInTheDocument();
  expect(button).toHaveClass("cds-button-disabled");
});

// call callback function when click
test("test behavior when click", () => {
  const callback = jest.fn((e: any) => {});

  // ARRANGE
  render(
    <ButtonBase onClick={(e) => callback(e)}>This Test Button</ButtonBase>
  );

  const button = screen.getByRole("button", { name: "This Test Button" });

  userEvent.click(button);

  expect(callback).toHaveBeenCalled();

  expect(button).toBeInTheDocument();
});
