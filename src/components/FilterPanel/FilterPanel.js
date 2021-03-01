import PropTypes from "prop-types";

import styles from "./FilterPanel.module.scss";

const FilterPanel = ({ activeFilter = "ALL", filterList = [] }) => {
  return (
    <ul className={styles.filterWrapper}>
      {filterList.map((item, index) => {
        return (
          <li
            className={`${styles.filterItem} ${
              activeFilter === item ? styles.active : ""
            }`}
            key={index}
            tabIndex="0"
          >
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterPanel;

FilterPanel.propTypes = {
  activeFilter: PropTypes.string,
  filterList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
