import { parseNumber } from "./parser";
import type { PricingFormValues, PricingFormErrors } from "@/types/pricing";

export function validatePricingForm(
  form: PricingFormValues,
): PricingFormErrors {
  const errors: PricingFormErrors = {};

  const desiredIncome = parseNumber(form.desiredIncome);
  const monthlyExpenses = parseNumber(form.monthlyExpenses);
  const billableHours = parseNumber(form.billableHours);
  const projectHours = parseNumber(form.projectHours);
  const safetyMarginRate = parseNumber(form.safetyMarginRate);
  const incomeTaxRate = parseNumber(form.incomeTaxRate);
  const expectedPrice = parseNumber(form.expectedPrice);

  if (desiredIncome === null || desiredIncome <= 0) {
    errors.desiredIncome =
      "El ingreso deseado debe ser un número mayor a 0.";
  }

  if (monthlyExpenses === null || monthlyExpenses < 0) {
    errors.monthlyExpenses = "Los gastos no pueden ser menores a 0.";
  }

  if (billableHours !== null) {
    if (!Number.isInteger(billableHours) || billableHours <= 0) {
      errors.billableHours =
        "Las horas facturables deben ser un número entero mayor a 0.";
    }
  }

  if (
    projectHours === null ||
    !Number.isInteger(projectHours) ||
    projectHours <= 0
  ) {
    errors.projectHours =
      "Las horas estimadas deben ser un número entero mayor a 0.";
  }

  if (
    safetyMarginRate !== null &&
    (safetyMarginRate < 0 || safetyMarginRate > 100)
  ) {
    errors.safetyMarginRate =
      "El margen debe estar entre 0% y 100% (inclusive).";
  }

  if (incomeTaxRate !== null && (incomeTaxRate < 0 || incomeTaxRate >= 100)) {
    errors.incomeTaxRate =
      "Los impuestos deben estar entre 0% y 99.99% (inclusive).";
  }

  if (expectedPrice !== null && expectedPrice <= 0) {
    errors.expectedPrice = "El precio esperado debe ser un número mayor a 0.";
  }

  return errors;
}
