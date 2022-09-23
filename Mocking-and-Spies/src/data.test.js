import { it, expect, describe, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn in provided", () => {
    // spy fn - empty fn that track if is executed or not
    // calback fn can be use as an implemenation
    // const logger = vi.fn(()=>{});
    const logger = vi.fn();

    // logger.mockImplementationOnce(() => {});

    generateReportData(logger);
    expect(logger).toBeCalled();
  });
});
