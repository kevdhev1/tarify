export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatPercentage(value: number): string {
  return (
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      signDisplay: "always",
    }).format(value) + "%"
  );
}

export function formatHours(value: number): string {
  return `${new Intl.NumberFormat("en-US").format(value)} h`;
}

export function formatHourlyRate(value: number): string {
  return `${formatCurrency(value)}/h`;
}
