import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import path from "path";
import writeData from "./io";

//replace witn empty fn
vi.mock("fs"); //hoisted
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1]; //last element is filename
      },
    },
  };
}); //set your implementation

it("should execute writefile method", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  writeData(testData, testFileName);

  expect(fs.writeFile).toBeCalled();
  //expect(writeData(testData, testFileName)).resolves.toBeUndefined();
  //   expect(fs.writeFile).toBeCalledWith(testFileName, testData)
});
it("should return a promise that resoves to no value if called correctly", () => {
  const testData = "Test";
  const testFileName = "test.txt";

  writeData(testData, testFileName);

  expect(writeData(testData, testFileName)).resolves.toBeUndefined();
});
