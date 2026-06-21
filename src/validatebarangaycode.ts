export function validateBarangayCode(code: string): boolean {
  return /^\d{10}$/.test(code.trim());
}
