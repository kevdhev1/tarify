import type { InputHTMLAttributes } from "react";
import styles from "./FormField.module.css";

interface FormFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id"
> {
  id: string;
  label: string;
  error?: string;
  tooltip?: string;
  required?: boolean;
}

export default function FormField({
  id,
  label,
  error,
  tooltip,
  required = false,
  className = "",
  ...inputProps
}: FormFieldProps) {
  const inputClassName = ["input", error ? "input-error" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.formField}>
      <div className={styles.fieldHeader}>
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>

        {tooltip && (
          <span className={styles.tooltip} title={tooltip}>
            ⓘ<span className={styles.tooltipText}>{tooltip}</span>
          </span>
        )}
      </div>
      <input id={id} className={inputClassName} {...inputProps} />
      <span className={styles.error}>{error}</span>
    </div>
  );
}
