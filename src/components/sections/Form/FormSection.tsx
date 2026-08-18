import PricingForm from "@/components/ui/PricingForm/PricingForm";
import type { PricingResult, PriceComparison } from "@/types/pricing";

interface FormSectionProps {
  onCalculationComplete: (
    result: PricingResult,
    comparison?: PriceComparison,
  ) => void;
}

export default function FormSection({
  onCalculationComplete,
}: FormSectionProps) {
  return (
    <section>
      <h2>Datos del Proyecto</h2>
      <p>
        Completa la información para calcular una recomendación de precio. Los
        campos marcados con (<span className="required-field">*</span>) son
        obligatorios
      </p>
      <PricingForm onCalculationComplete={onCalculationComplete} />
    </section>
  );
}
