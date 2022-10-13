import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import ButtonBase from "../ButtonBase";

test("loads and displays greeting", () => {
  // ARRANGE
  render(<ButtonBase>This Test Button</ButtonBase>);

  // // ACT
  // await userEvent.click(screen.getByText("Load Greeting"));
  // await screen.findByRole("heading");

  // // ASSERT
  // expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  // expect(screen.getByRole("button")).toBeDisabled();
});
