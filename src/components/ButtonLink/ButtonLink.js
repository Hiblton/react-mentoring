import PropTypes from "prop-types";

import styles from "./ButtonLink.module.scss";

const ButtonLink = ({ href, title }) => (
  <a
    className={`${styles.link} ${styles.transparent}`}
    aria-label={title}
    href={href}
  >
    {title}
  </a>
);

export { ButtonLink };

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
