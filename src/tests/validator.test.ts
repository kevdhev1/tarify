import { describe, expect, it } from "vitest";
import { validatePricingForm } from "@/domain/validations/validator";
import type { PricingFormValues } from "@/types/pricing";

const defaultPricingForm: PricingFormValues = {
  desiredIncome: "1000",
  monthlyExpenses: "250",
  billableHours: "100",
  projectHours: "20",
  safetyMarginRate: "10",
  incomeTaxRate: "15",
  expectedPrice: "300",
};

describe("validatePricingForm", () => {
  it("returns no errors when data is valid", () => {
    const errors = validatePricingForm(defaultPricingForm);
    expect(errors).toEqual({});
  });

  it("requires desired income to be greater than 0", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      desiredIncome: "0",
    };

    const errors = validatePricingForm(form);

    expect(errors).toEqual({
      desiredIncome: "El ingreso mensual deseado debe ser un número mayor a 0.",
    });
  });

  it("does not allow monthly expenses below 0", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      monthlyExpenses: "-1",
    };

    const errors = validatePricingForm(form);

    expect(errors).toEqual({
      monthlyExpenses: "Los gastos mensuales no pueden ser menores a 0.",
    });
  });

  it("requires billable hours to be greater than 0", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      billableHours: "0",
    };

    const errors = validatePricingForm(form);

    expect(errors).toEqual({
      billableHours:
        "Las horas facturables deben ser un número entero mayor a 0.",
    });
  });

  it("requires billable hours to be an integer", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      billableHours: "100.5",
    };

    const errors = validatePricingForm(form);

    expect(errors).toEqual({
      billableHours:
        "Las horas facturables deben ser un número entero mayor a 0.",
    });
  });

  it("requires project hours to be greater than 0", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      projectHours: "0",
    };

    const errors = validatePricingForm(form);

    expect(errors).toEqual({
      projectHours:
        "Las horas estimadas del proyecto deben ser un número entero mayor a 0.",
    });
  });

  it("requires project hours to be an integer", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      projectHours: "20.5",
    };

    const errors = validatePricingForm(form);

    expect(errors).toEqual({
      projectHours:
        "Las horas estimadas del proyecto deben ser un número entero mayor a 0.",
    });
  });

  it("requires safety margin to be between 0% and 100% inclusive", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      safetyMarginRate: "150",
    };

    const errors = validatePricingForm(form);

    expect(errors).toEqual({
      safetyMarginRate:
        "El margen de seguridad debe estar entre 0% y 100% (inclusive).",
    });
  });

  it("does not allow income tax to reach 100%", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      incomeTaxRate: "100",
    };

    const errors = validatePricingForm(form);

    expect(errors).toEqual({
      incomeTaxRate:
        "Los impuestos sobre ingresos deben estar entre 0% y 99.99% (inclusive).",
    });
  });

  it("requires expected price to be greater than 0", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      expectedPrice: "0",
    };

    const errors = validatePricingForm(form);

    expect(errors).toEqual({
      expectedPrice: "El precio esperado debe ser un número mayor a 0.",
    });
  });

  it("allows optional fields to be empty", () => {
    const form: PricingFormValues = {
      ...defaultPricingForm,
      billableHours: "",
      safetyMarginRate: "",
      incomeTaxRate: "",
      expectedPrice: "",
    };

    const errors = validatePricingForm(form);

    expect(errors).toEqual({});
  });
});
