import { it, expect } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const input = [1, 2, 3];

  // Act
  const result = add(input);

  // Assert
  const expectedResults = input.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResults);
});

it("should yeald NaN if at leas one invalid number is provided", () => {
  const input = ["invalid", 3];

  const result = add(input);

  expect(result).toBeNaN();
});

it("it should yeald a correct sum of an a array of numeric string value is provided", () => {
  const input = ["1", "2"];

  const result = add(input);
  const expectedResults = input.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );

  expect(result).toBe(expectedResults);
});

it("should yeald 0 if empty array is provided", () => {
  const input = [];

  const result = add(input);

  expect(result).toBe(0);
});

it("shoud trow an error if no value is passed into the function", () => {
  //   try {
  //     const result = add();
  //   } catch (error) {
  //     expect(error).toBeDefined();
  //   }
 
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/numbers is not iterable/)
});

it('should trow an error if provided wiht multiple arguments instead of an array', ()=>{
    const input1 = 1;
    const input2 = 2;

    const resultFn = () =>{
        add(input1, input2)
    }

    expect(resultFn).toThrow(/numbers is not iterable/)
})