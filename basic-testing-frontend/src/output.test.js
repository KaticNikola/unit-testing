import { it, expect, describe } from "vitest";
import { generateResultText, outputResult } from "./output";

describe("generateResultText()", () => {
  it("Should return a string no matter witch value is paaes in", () => {
    const inputStr = "invalid";
    const inputBool = true;
    const inputInt = 1;

    const resultStr = generateResultText(inputStr);
    const resultBool = generateResultText(inputBool);
    const resultInt = generateResultText(inputInt);

    expect(resultStr).toBeTypeOf("string");
    expect(resultBool).toBeTypeOf("string");
    expect(resultInt).toBeTypeOf("string");
  });
  it("should return a string that contains the calculation result if a number is provided as a result", () => {
    const result = 5;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = "no-calc";

    const resultText = generateResultText(result);

    expect(resultText).toBe("");
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = "invalid";

    const resultText = generateResultText(result);

    expect(resultText).toContain("Invalid");
  });
});

// describe("outputResult()", () => {});
