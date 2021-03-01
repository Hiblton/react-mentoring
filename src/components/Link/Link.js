import styles from "./Link.module.scss";

const Link = ({ href, title }) => (
  <a
    className={`${styles.link} ${styles.transparent}`}
    aria-label={title}
    href={href}
  >
    {title}
  </a>
);

export default Link;
