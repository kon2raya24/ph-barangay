
// Type exports for consumers
// Add specific types as needed
/**
 * validateBarangayCode
 * @param code
 */
export function validateBarangayCode(code: string): boolean {
  return /^\d{10}$/.test(code.trim());
}
