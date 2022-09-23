import { describe, it, expect } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
  it("should transform string number to number with type of number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBeTypeOf("number");
  });
  it("should transform string number to number with type of number", () => {
    const input = "1";

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });
  it("should yelad NaN for non-transformable values", () => {
    const input = "invalid";
    const inputObj = {};
    // testing multiple expectations
    const result = transformToNumber(input);
    const resultObj = transformToNumber(inputObj);

    expect(result).toBeNaN();
    expect(resultObj).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of sting number values is provided", () => {
    const input = ["1", "2", "3"];
    const result = cleanNumbers(input);
    expect(result[0]).toBeTypeOf("number");
    expect(result).toEqual([1, 2, 3]); //deep comparison
  });
  it("should throw an error if an array with at least one empty string is provided", () => {
    const input = ["", "2", "3"];
    const result = () => cleanNumbers(input);
    expect(result).toThrow();
  });
});
