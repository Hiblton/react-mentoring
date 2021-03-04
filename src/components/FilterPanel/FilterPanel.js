import PropTypes from "prop-types";

import styles from "./FilterPanel.module.scss";

const FilterPanel = ({ activeFilter = "ALL", filterOptions = [] }) => {
  return (
    <ul className={styles.filterWrapper}>
      {filterOptions.map((item) => {
        return (
          <li
            className={`${styles.filterItem} ${
              activeFilter === item ? styles.active : ""
            }`}
            key={item}
            tabIndex="0"
          >
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};

export { FilterPanel };

FilterPanel.propTypes = {
  activeFilter: PropTypes.string,
  filterList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
