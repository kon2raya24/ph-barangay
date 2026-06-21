import { describe, it, expect } from "vitest";
import { getCityMunicipalityFromCode } from "../getcitymunicipalityfromcode";

describe("getCityMunicipalityFromCode", () => {
  it("should be a function", () => {
    expect(typeof getCityMunicipalityFromCode).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => getCityMunicipalityFromCode(null as any)).toThrow();
  });
});
