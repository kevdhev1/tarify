export function parseNumber(value: string): number | null {
  const normalizedValue = value.trim();

  if (normalizedValue === "") {
    return null;
  }

  const parsedValue = Number(normalizedValue);

  if (!Number.isFinite(parsedValue)) {
    return null;
  }

  return parsedValue;
}
