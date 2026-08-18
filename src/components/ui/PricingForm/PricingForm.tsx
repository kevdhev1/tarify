import { useState } from "react";
import FormField from "@/components/ui/FormField/FormField";
import { calculatePricing } from "@/domain/calculator";
import { comparePrices } from "@/domain/comparison";
import { buildPricingInput } from "@/domain/validations/builder";
import { validatePricingForm } from "@/domain/validations/validator";
import styles from "./PricingForm.module.css";
import type {
  PricingResult,
  PriceComparison,
  PricingFormValues,
  PricingFormErrors,
} from "@/types/pricing";

interface PricingFormProps {
  onCalculationComplete: (
    result: PricingResult,
    comparison?: PriceComparison,
  ) => void;
}

export default function PricingForm({
  onCalculationComplete,
}: PricingFormProps) {
  const [formValues, setFormValues] = useState<PricingFormValues>({
    desiredIncome: "",
    monthlyExpenses: "",
    billableHours: "",
    projectHours: "",
    safetyMarginRate: "",
    incomeTaxRate: "",
    expectedPrice: "",
  });

  const [errors, setErrors] = useState<PricingFormErrors>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationErrors = validatePricingForm(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const pricingInput = buildPricingInput(formValues);
    const result = calculatePricing(pricingInput);

    let comparisonResult: PriceComparison | undefined;

    if (pricingInput.expectedPrice !== undefined) {
      comparisonResult = comparePrices(
        result.sustainableProjectPrice,
        pricingInput.expectedPrice,
      );
    }

    onCalculationComplete(result, comparisonResult);
  }

  return (
    <form className={styles.pricingForm} onSubmit={handleSubmit}>
      <FormField
        id="desired-income"
        name="desiredIncome"
        label="Ingreso mensual deseado"
        type="number"
        step="0.01"
        min="1"
        placeholder="Ej. 1000"
        value={formValues.desiredIncome}
        onChange={handleChange}
        error={errors.desiredIncome}
        required
      />

      <FormField
        id="monthly-expenses"
        name="monthlyExpenses"
        label="Gastos mensuales"
        type="number"
        step="0.01"
        min="0"
        placeholder="Ej. 500"
        value={formValues.monthlyExpenses}
        onChange={handleChange}
        error={errors.monthlyExpenses}
        required
      />

      <FormField
        id="billable-hours"
        name="billableHours"
        label="Horas facturables al mes"
        type="number"
        step="1"
        min="1"
        placeholder="Ej. 100"
        tooltip="Número de horas que puedes facturar a tus clientes cada mes. No incluyen tiempo dedicado a administración, aprendizaje o búsqueda de clientes."
        value={formValues.billableHours}
        onChange={handleChange}
        error={errors.billableHours}
      />

      <FormField
        id="project-hours"
        name="projectHours"
        label="Horas estimadas del proyecto"
        type="number"
        step="1"
        min="1"
        placeholder="Ej. 50"
        value={formValues.projectHours}
        onChange={handleChange}
        error={errors.projectHours}
        required
      />

      <FormField
        id="income-tax-rate"
        name="incomeTaxRate"
        label="Impuestos sobre ingresos (%)"
        type="number"
        step="0.01"
        min="0"
        max="99.99"
        placeholder="Ej. 15"
        tooltip="Porcentaje de impuestos que pagas sobre tus ingresos. Por ejemplo, si pagas 30% de impuestos, ingresa 30."
        value={formValues.incomeTaxRate}
        onChange={handleChange}
        error={errors.incomeTaxRate}
      />

      <FormField
        id="safety-margin-rate"
        name="safetyMarginRate"
        label="Margen de seguridad (%)"
        type="number"
        step="0.01"
        min="0"
        max="100"
        placeholder="Ej. 10"
        tooltip="Porcentaje adicional que agregas a tu tarifa para cubrir imprevistos, como cambios en el alcance del proyecto o retrasos en los pagos."
        value={formValues.safetyMarginRate}
        onChange={handleChange}
        error={errors.safetyMarginRate}
      />

      <FormField
        id="expected-price"
        name="expectedPrice"
        label="Precio esperado del proyecto"
        type="number"
        step="0.01"
        min="1"
        placeholder="Ej. 2000"
        value={formValues.expectedPrice}
        onChange={handleChange}
        error={errors.expectedPrice}
      />

      <button type="submit">Calcular Precio</button>
    </form>
  );
}
