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
    <table className={styles.breakdown}>
      <tbody>
        <tr>
          <td>Ingreso mensual deseado</td>
          <td>{formatCurrency(breakdown.desiredIncome)}</td>
        </tr>
        <tr>
          <td>Gastos mensuales</td>
          <td>{formatCurrency(breakdown.monthlyExpenses)}</td>
        </tr>
        <tr>
          <td>Ingreso mensual necesario</td>
          <td>{formatCurrency(breakdown.requiredMonthlyIncome)}</td>
        </tr>
        <tr>
          <td>Horas facturables</td>
          <td>{formatHours(breakdown.billableHours)}</td>
        </tr>
        <tr>
          <td>Tarifa base</td>
          <td>{formatHourlyRate(breakdown.baseHourlyRate)}</td>
        </tr>
        <tr>
          <td>Margen aplicado</td>
          <td>{formatPercentage(breakdown.safetyMarginRate)}</td>
        </tr>
        <tr>
          <td>Impuestos aplicados</td>
          <td>{formatPercentage(breakdown.incomeTaxRate)}</td>
        </tr>
        <tr>
          <td>Tarifa final</td>
          <td>{formatCurrency(breakdown.hourlyRate)}</td>
        </tr>
        <tr>
          <td>Horas estimadas del proyecto</td>
          <td>{formatHours(breakdown.projectHours)}</td>
        </tr>
        <tr>
          <td>Precio sostenible</td>
          <td>{formatCurrency(breakdown.sustainableProjectPrice)}</td>
        </tr>
      </tbody>
    </table>
  );
}
