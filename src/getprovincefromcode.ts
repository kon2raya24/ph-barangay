/**
 * getProvinceFromCode
 * @param code
 */
export function getProvinceFromCode(code: string): string {
  if (!validateBarangayCode(code)) throw new Error("Invalid barangay code");
  return code.slice(0, 4) + "000000";
}
