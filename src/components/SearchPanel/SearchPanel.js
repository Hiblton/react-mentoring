import styles from "./SearchPanel.module.scss";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { metaParamsSelector } from "../../features/Movies";

const SearchPanel = () => {
  const { search } = useSelector(metaParamsSelector);
  const searchInputRef = useRef();
  const history = useHistory();

  useEffect(() => {
    searchInputRef.current.value = search;
  }, [search]);

  const onSearch = (e) => {
    e.preventDefault();
    const searchValue = searchInputRef.current.value;
    history.push(searchValue ? `/search/${searchValue}` : "/");
  };

  return (
    <form className={styles.searchPanelWrapper} onSubmit={onSearch}>
      <input
        ref={searchInputRef}
        className={styles.searchPanelInput}
        placeholder="What do you want to watch?"
      />
      <button className={styles.searchPanelButton}>SEARCH</button>
    </form>
  );
};

export { SearchPanel };
