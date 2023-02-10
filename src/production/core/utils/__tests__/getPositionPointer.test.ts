import { getPositionPointer } from "../getPositionPointer";
test("should first", () => {
  const event = {
    offsetX: 30,
    offsetY: 20,
  };
  expect(getPositionPointer(event)).toStrictEqual({
    x: 30,
    y: 20,
  });
});
