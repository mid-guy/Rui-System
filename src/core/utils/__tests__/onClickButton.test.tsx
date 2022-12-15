import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonBase from "../../../packages/ButtonBase";
import { generateRippleButton } from "../generateRippleButton";
import { onClickButton } from "../onClickButton";

jest.mock("../generateRippleButton");

let event: any;
const getEventClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  event = e;
  return;
};

const callback = jest.fn();

describe("mount function", () => {
  test("onClick & ripple existed", () => {
    render(
      <ButtonBase animationframe="ripple" onClick={getEventClick}>
        This Test Button
      </ButtonBase>
    );
    const button = screen.getByRole("button", { name: "This Test Button" });
    userEvent.click(button);
    const mockEvent = {
      ...event,
      nativeEvent: {
        ...event.nativeEvent,
        offsetX: 10,
        offsetY: 20,
      },
      currentTarget: {
        childNodes: button.childNodes,
      },
    };
    onClickButton(mockEvent, callback, "ripple");
    expect(generateRippleButton).toBeCalledWith(mockEvent);
    expect(callback).toBeCalledWith(mockEvent);
  });

  test("onClick undefined", () => {
    render(<ButtonBase animationframe="ripple">This Test Button</ButtonBase>);
    const button = screen.getByRole("button", { name: "This Test Button" });
    userEvent.click(button);
    onClickButton(event, undefined, "ripple");
    expect(generateRippleButton).toBeCalledWith(event);
  });
  test("onClick undefined && animationframe is `scale`", () => {
    render(<ButtonBase animationframe="scale">This Test Button</ButtonBase>);
    const button = screen.getByRole("button", { name: "This Test Button" });
    userEvent.click(button);
    onClickButton(event, undefined, "scale");
    expect(generateRippleButton).not.toBeCalledWith(event);
  });
  test("onClick existed && animationframe is `scale`", () => {
    render(
      <ButtonBase animationframe="scale" onClick={getEventClick}>
        This Test Button
      </ButtonBase>
    );
    const button = screen.getByRole("button", { name: "This Test Button" });
    userEvent.click(button);
    onClickButton(event, callback, "scale");
    expect(generateRippleButton).not.toBeCalledWith(event);
  });
});
