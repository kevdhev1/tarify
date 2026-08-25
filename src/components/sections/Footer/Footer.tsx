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
          <a href="#">
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="#">
            <GithubIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}
