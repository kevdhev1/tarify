import type { Breakdown } from "@/types/pricing";
import styles from "./BreakdownTable.module.css";
import {
  formatCurrency,
  formatHours,
  formatHourlyRate,
  formatPercentage,
} from "@/utils/formatters";

interface BreakdownTableProps {
  breakdown: Breakdown;
}

export default function BreakdownTable({ breakdown }: BreakdownTableProps) {
  return (
    <table className={styles.table}>
      <tbody>
        <tr className={styles.row}>
          <td>Ingreso mensual deseado</td>
          <td className={styles.boldText}>
            {formatCurrency(breakdown.desiredIncome)}
          </td>
        </tr>
        <tr className={styles.row}>
          <td>Gastos mensuales</td>
          <td className={styles.boldText}>
            {formatCurrency(breakdown.monthlyExpenses)}
          </td>
        </tr>
        <tr className={styles.row}>
          <td>Ingreso mensual necesario</td>
          <td className={styles.boldText}>
            {formatCurrency(breakdown.requiredMonthlyIncome)}
          </td>
        </tr>
        <tr className={styles.row}>
          <td>Horas facturables</td>
          <td className={styles.boldText}>
            {formatHours(breakdown.billableHours)}
          </td>
        </tr>
        <tr className={styles.row}>
          <td>Tarifa base</td>
          <td className={styles.boldText}>
            {formatHourlyRate(breakdown.baseHourlyRate)}
          </td>
        </tr>
        <tr className={styles.row}>
          <td>Margen aplicado</td>
          <td className={styles.boldText}>
            {formatPercentage(breakdown.safetyMarginRate)}
          </td>
        </tr>
        <tr className={styles.row}>
          <td>Impuestos aplicados</td>
          <td className={styles.boldText}>
            {formatPercentage(breakdown.incomeTaxRate)}
          </td>
        </tr>
        <tr className={styles.row}>
          <td>Tarifa final</td>
          <td className={styles.boldText}>
            {formatCurrency(breakdown.hourlyRate)}
          </td>
        </tr>
        <tr className={styles.row}>
          <td>Horas estimadas</td>
          <td className={styles.boldText}>
            {formatHours(breakdown.projectHours)}
          </td>
        </tr>
        <tr className={styles.row}>
          <td>Precio sostenible</td>
          <td className={styles.boldText}>
            {formatCurrency(breakdown.sustainableProjectPrice)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
