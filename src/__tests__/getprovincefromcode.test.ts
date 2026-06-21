import { describe, it, expect } from "vitest";
import { getProvinceFromCode } from "../getprovincefromcode";

describe("getProvinceFromCode", () => {
  it("should be a function", () => {
    expect(typeof getProvinceFromCode).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => getProvinceFromCode(null as any)).toThrow();
  });
});
