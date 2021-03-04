import PropTypes from "prop-types";

import styles from "./SortingPanel.module.scss";

const SortingPanel = ({ activeSorting = "RELEASE", sortingOptions = [] }) => {
  return (
    <div className={styles.sortingWrapper}>
      <span className={styles.sortingLabel}>SORT BY</span>
      <select className={styles.sortingSelect}>
        {sortingOptions.map((item) => {
          return (
            <option
              className={`${
                activeSorting === item ? styles.sortingOptionActive : ""
              }`}
              value={item}
              key={item}
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export { SortingPanel };

SortingPanel.propTypes = {
  activeSorting: PropTypes.string,
  sortingList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
