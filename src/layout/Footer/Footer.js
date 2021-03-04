import styles from "./Footer.module.scss";

import { Logo } from "../../components";

const Footer = () => (
  <footer className={styles.footer}>
    <Logo />
  </footer>
);

export { Footer };
