import { describe, expect, it } from "vitest";
import { buildPricingInput } from "@/domain/validations/builder";
import type { PricingFormValues } from "@/types/pricing";
import {
  DEFAULT_SAFETY_MARGIN_RATE,
  DEFAULT_BILLABLE_HOURS,
  DEFAULT_INCOME_TAX_RATE,
} from "@/constants/constants";

const defaultPricingForm: PricingFormValues = {
  desiredIncome: "1000",
  monthlyExpenses: "250",
  billableHours: "100",
  projectHours: "20",
  safetyMarginRate: "10",
  incomeTaxRate: "15",
  expectedPrice: "300",
};

describe("buildPricingInput", () => {
  it("uses defaults when optional fields are empty", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      billableHours: "",
      safetyMarginRate: "",
      incomeTaxRate: "",
    };

    const pricingInput = buildPricingInput(form);

    expect(pricingInput.billableHours).toBe(DEFAULT_BILLABLE_HOURS);
    expect(pricingInput.safetyMarginRate).toBe(DEFAULT_SAFETY_MARGIN_RATE);
    expect(pricingInput.incomeTaxRate).toBe(DEFAULT_INCOME_TAX_RATE);
  });

  it("preserves user values when optional fields are provided", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      billableHours: "120",
      safetyMarginRate: "20",
      incomeTaxRate: "12",
    };

    const pricingInput = buildPricingInput(form);

    expect(pricingInput.billableHours).toBe(120);
    expect(pricingInput.safetyMarginRate).toBe(20);
    expect(pricingInput.incomeTaxRate).toBe(12);
  });
});
