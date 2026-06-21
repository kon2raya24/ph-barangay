import { describe, it, expect } from "vitest";
import { validateBarangayCode } from "../validatebarangaycode";

describe("validateBarangayCode", () => {
  it("should be a function", () => {
    expect(typeof validateBarangayCode).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => validateBarangayCode(null as any)).toThrow();
  });
});
