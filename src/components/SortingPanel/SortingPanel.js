import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesAction } from "../../features/Movies";
import { useUpdateEffect } from "../../utils/CustomHooks";

import styles from "./SortingPanel.module.scss";

const DEFAULT_SORTING = "RATING";
const DEFAULT_ORDER = "ASC";

const SORTING_OPTIONS = ["RATING", "RELEASE_DATE", "RUNTIME"];

const SortingPanel = () => {
  const dispatch = useDispatch();
  const [activeSorting, setActiveSorting] = useState(DEFAULT_SORTING);

  useUpdateEffect(() => {
    dispatch(
      fetchMoviesAction({
        sortBy: activeSorting.toLowerCase(),
        sortOrder: DEFAULT_ORDER,
      })
    );
  }, [activeSorting]);

  return (
    <div className={styles.sortingWrapper}>
      <span className={styles.sortingLabel}>SORT BY</span>
      <select
        className={styles.sortingSelect}
        value={activeSorting}
        onChange={(e) => setActiveSorting(e.target.value)}
      >
        {SORTING_OPTIONS.map((item) => {
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
