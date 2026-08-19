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
    <section className={styles.result}>
      <h3>Resultado</h3>

      <div>
        <p>PRECIO SOSTENIBLE</p>
        <h2>{formatCurrency(pricingResult.sustainableProjectPrice)}</h2>
        <p>
          Tarifa recomendada por hora:
          <span>{formatHourlyRate(pricingResult.hourlyRate)}</span>
        </p>
      </div>

      <h3>Desglose del Cálculo</h3>
      <BreakdownTable breakdown={pricingResult.breakdown} />

      {comparison && (
        <>
          <h3>Comparación con tu precio esperado</h3>
          <ComparisonCard comparison={comparison} />
        </>
      )}

      <div>
        <p>¿Cómo se obtuvo este resultado?</p>
        <p>
          Este cálculo parte de tus ingresos deseados, gastos mensuales, horas
          facturables y tiempo estimado del proyecto para obtener una
          recomendación de precio sostenible.
        </p>
      </div>

      <div>
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
