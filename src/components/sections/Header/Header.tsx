import CalculatorIcon from "@/icons/calculator";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.iconContainer}>
        <CalculatorIcon />
      </div>
      <h1 className={styles.title}>Tarify</h1>
      <p className={styles.description}>
        Calcula un precio sostenible para tus proyectos freelance en segundos
      </p>
    </header>
  );
}
