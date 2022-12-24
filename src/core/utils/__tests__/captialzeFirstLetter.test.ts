import capitalizeFirstLetter from "../capitalizeFirstLetter";

describe("capitalizeFirstLetter", () => {
  test("should return capitalize first letter", () => {
    expect(capitalizeFirstLetter("sm")).toBe("Sm");
  });
});
