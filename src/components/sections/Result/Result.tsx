import type { PriceComparison, PricingResult } from "@/types/pricing";
import { formatCurrency, formatHourlyRate } from "@/utils/formatters";
import BreakdownTable from "@/components/ui/Breakdown/BreakdownTable";
import ComparisonCard from "@/components/ui/Comparison/ComparisonCard";
import styles from "./Result.module.css";

interface ResultProps {
  pricingResult: PricingResult | null;
  comparison?: PriceComparison;
}

export default function Result({ pricingResult, comparison }: ResultProps) {
  if (!pricingResult) return null;

  return (
    <section id="result" className={styles.result}>
      <h3 className={styles.title}>Resultado</h3>

      <div className={styles.mainData}>
        <p className={styles.sustainablePrice}>PRECIO SOSTENIBLE</p>
        <h2>{formatCurrency(pricingResult.sustainableProjectPrice)}</h2>
        <p className={styles.hourlyRateText}>
          Tarifa recomendada por hora:{" "}
          <span className={styles.textBold}>
            {formatHourlyRate(pricingResult.hourlyRate)}
          </span>
        </p>
      </div>

      <h3 className={styles.title}>Desglose del cálculo</h3>
      <BreakdownTable breakdown={pricingResult.breakdown} />

      {comparison && (
        <>
          <h3 className={styles.title}>Comparación con tu precio</h3>
          <ComparisonCard comparison={comparison} />
        </>
      )}

      <div className={styles.explanation}>
        <p className={styles.textBoldBlack}>¿Cómo se obtuvo este resultado?</p>
        <p>
          La tarifa sostenible se obtiene a partir del ingreso que necesitas generar
          cada mes y de las horas que realmente puedes facturar. Sobre esa tarifa se
          aplican el margen de seguridad y el ajuste de impuestos para obtener un
          precio que cubra tus necesidades.
        </p>
      </div>

      <div className={styles.disclaimer}>
        <p>ⓘ</p>
        <p>
          Este resultado es una recomendación. Factores como experiencia,
          especialización, negociación o demanda pueden hacer que el precio
          final sea diferente.
        </p>
      </div>
    </section>
  );
}
