import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesAction } from "../../features/Movies";
import { useUpdateEffect } from "../../utils/CustomHooks";

import styles from "./FilterPanel.module.scss";

const DEFAULT_FILTER = "ALL";

const FILTER_OPTIONS = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

const FilterPanel = () => {
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState(DEFAULT_FILTER);

  useUpdateEffect(() => {
    dispatch(
      fetchMoviesAction(
        activeFilter !== DEFAULT_FILTER
          ? {
              filter: activeFilter,
            }
          : {}
      )
    );
  }, [activeFilter]);

  return (
    <ul className={styles.filterWrapper}>
      {FILTER_OPTIONS.map((item) => {
        return (
          <li
            className={`${styles.filterItem} ${
              activeFilter === item ? styles.active : ""
            }`}
            key={item}
            onClick={() => {
              setActiveFilter(item);
            }}
          >
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};

export { FilterPanel };
