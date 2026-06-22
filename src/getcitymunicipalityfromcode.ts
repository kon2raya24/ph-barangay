
// Type exports for consumers
// Add specific types as needed
export function getCityMunicipalityFromCode(code: string): string {
  if (!validateBarangayCode(code)) throw new Error("Invalid barangay code");
  return code.slice(0, 6) + "0000";
}
