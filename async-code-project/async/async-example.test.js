import { describe, it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";
describe("generateToken()", () => {
  it("should generate a token value", (done) => {
    const userEmail = "test@test.com";
    generateToken(userEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        // expect(token).toBe(2);
        done();
      } catch (err) {
        done(err);
      }
    });
  });
  it("should generate a token value Promise", () => {
    const userEmail = "test@test.com";
    // promise resolve
    expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
    // expect promise to reject
    // expect(generateTokenPromise(userEmail)).rejects.toBe()
  });
  it("should generate a token value async", async () => {
    const userEmail = "test@test.com";
    const token = await generateTokenPromise(userEmail);
    expect(token).toBeDefined();
  });
});
