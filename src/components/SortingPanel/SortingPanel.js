import PropTypes from "prop-types";

import styles from "./SortingPanel.module.scss";

const SortingPanel = ({ activeSorting = "RELEASE", sortingList = [] }) => {
  return (
    <div className={styles.sortingWrapper}>
      <span className={styles.sortingLabel}>SORT BY</span>
      <select className={styles.sortingSelect}>
        {sortingList.map((item, index) => {
          return (
            <option
              className={`${
                activeSorting === item ? styles.sortingOptionActive : ""
              }`}
              value={item}
              key={index}
            >
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SortingPanel;

SortingPanel.propTypes = {
  activeSorting: PropTypes.string,
  sortingList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
