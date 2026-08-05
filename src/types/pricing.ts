export interface PricingFormValues {
  desiredIncome: string;
  monthlyExpenses: string;
  billableHours: string;
  projectHours: string;
  safetyMarginRate: string;
  incomeTaxRate: string;
  expectedPrice: string;
}

export type PricingFormErrors = Partial<
  Record<keyof PricingFormValues, string>
>;

export interface PricingInput {
  desiredIncome: number;
  monthlyExpenses: number;
  billableHours: number;
  projectHours: number;
  safetyMarginRate: number;
  incomeTaxRate: number;
  expectedPrice?: number;
}

export interface Breakdown {
  desiredIncome: number;
  monthlyExpenses: number;
  requiredMonthlyIncome: number;
  billableHours: number;
  projectHours: number;
  baseHourlyRate: number;
  safetyMarginRate: number;
  safetyMarginAmount: number;
  incomeTaxRate: number;
  taxAmount: number;
  hourlyRate: number;
  sustainableProjectPrice: number;
}

export interface PricingResult {
  hourlyRate: number;
  sustainableProjectPrice: number;
  breakdown: Breakdown;
}

export interface PriceComparison {
  differencePercentage: number;
  category: string;
  justification: string;
  color: string;
}
