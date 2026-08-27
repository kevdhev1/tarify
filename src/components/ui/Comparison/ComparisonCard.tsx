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

const variants = {
  red: {
    icon: ArrowDown,
    card: styles.redCard,
    iconContainer: styles.redIcon,
  },
  yellow: {
    icon: Minus,
    card: styles.yellowCard,
    iconContainer: styles.yellowIcon,
  },
  green: {
    icon: Check,
    card: styles.greenCard,
    iconContainer: styles.greenIcon,
  },
  blue: {
    icon: ArrowUp,
    card: styles.blueCard,
    iconContainer: styles.blueIcon,
  },
};

export default function ComparisonCard({ comparison }: ComparisonCardProps) {
  const variant = variants[comparison.color];
  const Icon = variant.icon;

  return (
    <div className={`${styles.card} ${variant.card}`}>
      <div className={`${styles.icon} ${variant.iconContainer}`}>
        <Icon />
      </div>

      <div className={styles.cardContent}>
        <p>
          <strong>{comparison.category}</strong>. Actualmente, la diferencia
          entre precios es de{" "}
          <span className={styles.percentage}>
            {formatPercentage(comparison.differencePercentage)}
          </span>
        </p>
      </div>
    </div>
  );
}
