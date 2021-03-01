import PropTypes from "prop-types";

import styles from "./MoviesCounter.module.scss";

const MoviesCounter = ({ count }) => (
  <h3 className={styles.counter}>
    <b>{count}</b> movie{count > 1 ? "s" : ""} found
  </h3>
);

export default MoviesCounter;

MoviesCounter.propTypes = {
  count: PropTypes.number.isRequired,
};
