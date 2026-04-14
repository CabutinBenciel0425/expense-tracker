export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value,
  );

export function generateNewId(): string {
  return new Date().toISOString() + Math.random();
}
