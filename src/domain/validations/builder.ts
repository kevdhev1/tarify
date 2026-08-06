import { parseNumber } from "./parser";
import type { PricingFormValues, PricingInput } from "@/types/pricing";
import {
  DEFAULT_BILLABLE_HOURS,
  DEFAULT_SAFETY_MARGIN_RATE,
  DEFAULT_INCOME_TAX_RATE,
} from "@/constants/constants";

export function buildPricingInput(form: PricingFormValues): PricingInput {
  const billableHours = parseNumber(form.billableHours);
  const safetyMarginRate = parseNumber(form.safetyMarginRate);
  const incomeTaxRate = parseNumber(form.incomeTaxRate);
  const expectedPrice = parseNumber(form.expectedPrice);

  const pricingInput: PricingInput = {
    desiredIncome: Number(form.desiredIncome),
    monthlyExpenses: Number(form.monthlyExpenses),
    projectHours: Number(form.projectHours),

    billableHours: billableHours ?? DEFAULT_BILLABLE_HOURS,
    safetyMarginRate: safetyMarginRate ?? DEFAULT_SAFETY_MARGIN_RATE,
    incomeTaxRate: incomeTaxRate ?? DEFAULT_INCOME_TAX_RATE,

    expectedPrice: expectedPrice ?? undefined,
  };

  return pricingInput;
}
