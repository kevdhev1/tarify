import type { PricingInput, PricingResult, Breakdown } from "@/types/pricing";

export function calculatePricing(pricingInput: PricingInput): PricingResult {
  // 1. Calculate the necessary monthly income
  const requiredMonthlyIncome =
    pricingInput.desiredIncome + pricingInput.monthlyExpenses;

  // 2. Calculate the base hourly rate
  const baseHourlyRate = requiredMonthlyIncome / pricingInput.billableHours;

  // 3. Apply safety margin
  const safetyMarginAmount =
    baseHourlyRate * (pricingInput.safetyMarginRate / 100);
  const hourlyRateWithMargin = baseHourlyRate + safetyMarginAmount;

  // 4. Apply taxes using gross-up
  const taxRate = pricingInput.incomeTaxRate / 100;
  const hourlyRate = hourlyRateWithMargin / (1 - taxRate);
  const taxAmount = hourlyRate - hourlyRateWithMargin;

  // 5. Calculate the sustainable price of the project
  const sustainableProjectPrice = hourlyRate * pricingInput.projectHours;

  const breakdown: Breakdown = {
    desiredIncome: pricingInput.desiredIncome,
    monthlyExpenses: pricingInput.monthlyExpenses,
    requiredMonthlyIncome,
    billableHours: pricingInput.billableHours,
    projectHours: pricingInput.projectHours,
    baseHourlyRate,
    safetyMarginRate: pricingInput.safetyMarginRate,
    safetyMarginAmount,
    incomeTaxRate: pricingInput.incomeTaxRate,
    taxAmount,
    hourlyRate,
    sustainableProjectPrice,
  };

  const pricingResult: PricingResult = {
    hourlyRate,
    sustainableProjectPrice,
    breakdown,
  };

  return pricingResult;
}
