import styles from "./SearchPanel.module.scss";

const SearchPanel = () => (
  <div className={styles.searchPanelWrapper}>
    <input
      className={styles.searchPanelInput}
      placeholder="What do you want to watch?"
    />
    <button className={styles.searchPanelButton}>SEARCH</button>
  </div>
);

export { SearchPanel };
