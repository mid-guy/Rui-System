import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonBase from "../ButtonBase";
import userEvent from "@testing-library/user-event";
import { utils } from "../../../core/utils/utils";

describe("flow test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  test("render Button UI", () => {
    render(<ButtonBase animationframe="ripple">This Test Button</ButtonBase>);
    const button = screen.getByRole("button", { name: "This Test Button" });
    userEvent.click(button);
    const ripple = screen.getByTestId("cds-animation-ripple");
    expect(ripple).toBeInTheDocument();
  });

  test("render getPositionPointer UI", () => {
    const getPositionPointer = jest.spyOn(utils, "getPositionPointer");
    render(<ButtonBase animationframe="ripple">This Test Button</ButtonBase>);
    const button = screen.getByRole("button", { name: "This Test Button" });
    userEvent.click(button);
    expect(getPositionPointer).toBeCalled();
    expect(getPositionPointer).toBeCalledTimes(1);
  });

  test("on animation create UI", () => {
    render(<ButtonBase animationframe="ripple">This Test Button</ButtonBase>);
    const offsetX = 30;
    const offsetY = 20;
    const getPositionPointer = jest
      .spyOn(utils, "getPositionPointer")
      .mockImplementation(() => ({ x: offsetX, y: offsetY }));
    const button = screen.getByRole("button", { name: "This Test Button" });
    userEvent.click(button);
    expect(getPositionPointer).toBeCalled();
    const ripple = screen.getByTestId("cds-animation-ripple");
    expect(ripple).toHaveStyle(`left: ${offsetX}px`);
    expect(ripple).toHaveStyle(`right: ${offsetY}px`);
  });

  test("on animation end UI", () => {
    render(<ButtonBase animationframe="ripple">This Test Button</ButtonBase>);
    const getPositionPointer = jest.spyOn(utils, "getPositionPointer");
    const getIndexCurrentAnimation = jest.spyOn(
      utils,
      "getIndexCurrentAnimation"
    );
    const button = screen.getByRole("button", { name: "This Test Button" });
    userEvent.click(button);
    expect(getPositionPointer).toBeCalled();
    const ripple = screen.getByTestId("cds-animation-ripple");
    fireEvent.animationEnd(ripple);
    expect(getIndexCurrentAnimation).toBeCalled();
    expect(ripple).not.toBeInTheDocument();
  });
});
