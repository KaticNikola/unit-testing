import { describe, it, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError", () => {
  it("should contain provided status code, messagea and data", () => {
    const testStatusCode = 1;
    const testMessage = "Test";
    const testData = { key: "Test" };

    const testError = new HttpError(testStatusCode, testMessage, testData)

    expect(testError.statusCode).toBe(testStatusCode)
    expect(testError.message).toBe(testMessage)
    expect(testError.data).toBe(testData)
  });
  
  it("should contain undefined as data if no data is provided", ()=>{
    const testStatusCode = 1;
    const testMessage = "Test";
    // const testData = { key: "Test" };

    const testError = new HttpError(testStatusCode, testMessage)

    expect(testError.statusCode).toBe(testStatusCode)
    expect(testError.message).toBe(testMessage)
    expect(testError.data).toBeUndefined
  })
});

describe("ValidationError", () => {
    it("should contain the message if message is provided", ()=>{
        const testMessage = 'test'
        const testValidationError = new ValidationError(testMessage)

        expect(testValidationError.message).toBe(testMessage)
    })
    it("should contain undefined data if message is not provided", ()=>{
        const testValidationError = new ValidationError()

        expect(testValidationError.message).toBeUndefined()
    })
});
