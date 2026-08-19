import type { PriceComparison } from "@/types/pricing";
import styles from "./ComparisonCard.module.css";
import ArrowDown from "@/icons/ArrowDown";
import ArrowUp from "@/icons/ArrowUp";
import Minus from "@/icons/Minus";
import Check from "@/icons/Check";
import { formatPercentage } from "@/utils/formatters";

interface ComparisonCardProps {
  comparison: PriceComparison;
}

const icons = {
  red: ArrowDown,
  yellow: Minus,
  green: Check,
  blue: ArrowUp,
};

export default function ComparisonCard({ comparison }: ComparisonCardProps) {
  const Icon = icons[comparison.color];

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon />
      </div>

      <div className={styles.cardContent}>
        <h4>{comparison.category}</h4>
        <p>
          {comparison.justification}. Actualmente, la diferencia entre el precio
          sostenible y tu precio esperado es de{" "}
          <strong>{formatPercentage(comparison.differencePercentage)}</strong>
        </p>
      </div>
    </div>
  );
}
