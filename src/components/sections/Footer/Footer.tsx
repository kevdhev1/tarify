import LinkedinIcon from "@/icons/Linkedin";
import TwitterIcon from "@/icons/Twitter";
import GithubIcon from "@/icons/Github";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; Tarify. Hecho con <span aria-hidden="true">💙</span>
      </p>
      <ul className={styles.social}>
        <li>
          <a href="https://www.linkedin.com/in/kevdhev/" target="_blank">
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href="https://x.com/kevdhev1" target="_blank">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="https://github.com/kevdhev1/tarify" target="_blank">
            <GithubIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
