import PricingForm from "@/components/ui/PricingForm/PricingForm";
import type { PricingResult, PriceComparison } from "@/types/pricing";
import styles from "./FormSection.module.css";

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
    <section className={styles.formSection}>
      <h2 className={styles.title}>Datos del proyecto</h2>
      <p className={styles.description}>
        Completa la información para calcular una recomendación de precio.
      </p>
      <PricingForm onCalculationComplete={onCalculationComplete} />
    </section>
  );
}
