import { getIndexCurrentAnimation } from "../getIndexCurrentAnimation";

describe("getIndexCurrentAnimation", () => {
  test("source existed", () => {
    const nativeEvent = {
      offsetX: 30,
      offsetY: 20,
    };
    const mockSource = [
      {
        uuid: "testing-1",
        positionPointer: {
          x: nativeEvent.offsetX,
          y: nativeEvent.offsetY,
        },
      },
      {
        uuid: "testing-2",
        positionPointer: {
          x: nativeEvent.offsetX,
          y: nativeEvent.offsetY,
        },
      },
    ];
    expect(getIndexCurrentAnimation("testing-1", mockSource)).toEqual(0);
  });

  // test("source non-existed", () => {
  //   const result = getIndexCurrentAnimation("testing-1", []);
  //   expect(result).toThrow(TypeError);
  // });
});
