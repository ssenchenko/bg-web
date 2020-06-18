import { toTitle } from "./general";

describe("toTitle() function", () => {
  it("makes the first letter in the string upper case", () => {
    expect(toTitle("capitalize me")).toBe("Capitalize me");
  });
  it("returns undefined if input is undefined", () => {
    expect(toTitle(undefined)).toBeUndefined();
  });
  it("returns null if input is null", () => {
    expect(toTitle(null)).toBeNull();
  });
  it("returns empty string on empty string input", () => {
    expect(toTitle("")).toBe("");
  });
});
