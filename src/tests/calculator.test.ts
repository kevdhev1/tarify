import { describe, expect, it } from "vitest";
import { calculatePricing } from "@/domain/calculator";
import type { PricingInput } from "@/types/pricing";

const defaultPricingInput: PricingInput = {
  desiredIncome: 1000,
  monthlyExpenses: 260,
  billableHours: 100,
  projectHours: 20,
  safetyMarginRate: 10,
  incomeTaxRate: 15,
};

describe("calculatePricing", () => {
  it("calculates the sustainable project price correctly", () => {
    const result = calculatePricing(defaultPricingInput);

    expect(result.sustainableProjectPrice).toBeCloseTo(326.12, 2);
    expect(result.hourlyRate).toBeCloseTo(16.31, 2);
    expect(result.breakdown.requiredMonthlyIncome).toBeCloseTo(1260, 2);
    expect(result.breakdown.baseHourlyRate).toBeCloseTo(12.6, 2);
    expect(result.breakdown.safetyMarginAmount).toBeCloseTo(1.26, 2);
    expect(result.breakdown.taxAmount).toBeCloseTo(2.45, 2);
  });

  it("calculates the price without monthly expenses", () => {
    const pricingInput: PricingInput = {
      ...defaultPricingInput,
      monthlyExpenses: 0,
    };

    const result = calculatePricing(pricingInput);

    expect(result.sustainableProjectPrice).toBeCloseTo(258.82, 2);
    expect(result.hourlyRate).toBeCloseTo(12.94, 2);
    expect(result.breakdown.requiredMonthlyIncome).toBeCloseTo(1000, 2);
    expect(result.breakdown.baseHourlyRate).toBeCloseTo(10, 2);
    expect(result.breakdown.safetyMarginAmount).toBeCloseTo(1, 2);
    expect(result.breakdown.taxAmount).toBeCloseTo(1.94, 2);
  });

  it("calculates the price without safety margin", () => {
    const pricingInput: PricingInput = {
      ...defaultPricingInput,
      safetyMarginRate: 0,
    };

    const result = calculatePricing(pricingInput);

    expect(result.sustainableProjectPrice).toBeCloseTo(296.47, 2);
    expect(result.hourlyRate).toBeCloseTo(14.82, 2);
    expect(result.breakdown.requiredMonthlyIncome).toBeCloseTo(1260, 2);
    expect(result.breakdown.baseHourlyRate).toBeCloseTo(12.6, 2);
    expect(result.breakdown.safetyMarginAmount).toBeCloseTo(0, 2);
    expect(result.breakdown.taxAmount).toBeCloseTo(2.22, 2);
  });

  it("calculates the price without income tax", () => {
    const pricingInput: PricingInput = {
      ...defaultPricingInput,
      incomeTaxRate: 0,
    };

    const result = calculatePricing(pricingInput);

    expect(result.sustainableProjectPrice).toBeCloseTo(277.2, 2);
    expect(result.hourlyRate).toBeCloseTo(13.86, 2);
    expect(result.breakdown.requiredMonthlyIncome).toBeCloseTo(1260, 2);
    expect(result.breakdown.baseHourlyRate).toBeCloseTo(12.6, 2);
    expect(result.breakdown.safetyMarginAmount).toBeCloseTo(1.26, 2);
    expect(result.breakdown.taxAmount).toBeCloseTo(0, 2);
  });

  it("calculates the price with different billable hours", () => {
    const pricingInput: PricingInput = {
      ...defaultPricingInput,
      billableHours: 80,
    };

    const result = calculatePricing(pricingInput);

    expect(result.sustainableProjectPrice).toBeCloseTo(407.65, 2);
    expect(result.hourlyRate).toBeCloseTo(20.38, 2);
    expect(result.breakdown.requiredMonthlyIncome).toBeCloseTo(1260, 2);
    expect(result.breakdown.baseHourlyRate).toBeCloseTo(15.75, 2);
    expect(result.breakdown.safetyMarginAmount).toBeCloseTo(1.58, 2);
    expect(result.breakdown.taxAmount).toBeCloseTo(3.06, 2);
  });

  it("calculates the price with different project hours", () => {
    const pricingInput: PricingInput = {
      ...defaultPricingInput,
      projectHours: 40,
    };

    const result = calculatePricing(pricingInput);

    expect(result.sustainableProjectPrice).toBeCloseTo(652.24, 2);
    expect(result.hourlyRate).toBeCloseTo(16.31, 2);
    expect(result.breakdown.requiredMonthlyIncome).toBeCloseTo(1260, 2);
    expect(result.breakdown.baseHourlyRate).toBeCloseTo(12.6, 2);
    expect(result.breakdown.safetyMarginAmount).toBeCloseTo(1.26, 2);
    expect(result.breakdown.taxAmount).toBeCloseTo(2.45, 2);
  });
});
