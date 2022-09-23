import { describe, it, expect } from "vitest";
import { validateNotEmpty } from "./validation";

it("should trow an error if empty string is provided as value", () => {
  const testMessage = "";

  // CB when testing for errors
  const validationFn = () => validateNotEmpty(testMessage);

  expect(validationFn).toThrow();
});
it("should trow an error if string of blanks is provided as value", () => {
  const testMessage = "    ";

  // CB when testing for errors
  const validationFn = () => validateNotEmpty(testMessage);

  expect(validationFn).toThrow();
});
it("should trow an error if error is provided as value", () => {
  const testMessage = "";
  const testErrorMessage = 'Test'

  // CB when testing for errors
  const validationFn = () => validateNotEmpty(testMessage, testErrorMessage);

  expect(validationFn).toThrow(testErrorMessage);
});
