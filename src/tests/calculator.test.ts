import { describe, expect, it } from "vitest";
import { calculatePricing } from "@/domain/calculator";
import type { PricingInput } from "@/types/pricing";

describe("calculatePricing", () => {
  it("calculates the sustainable project price correctly", () => {
    const pricingInput: PricingInput = {
      desiredIncome: 1000,
      monthlyExpenses: 260,
      billableHours: 100,
      projectHours: 20,
      safetyMarginRate: 10,
      incomeTaxRate: 15,
    };

    const result = calculatePricing(pricingInput);

    expect(result.sustainableProjectPrice).toBeCloseTo(326.12, 2);
    expect(result.hourlyRate).toBeCloseTo(16.31, 2);
  });
});
