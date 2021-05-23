import styles from "./SearchPanel.module.scss";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { metaParamsSelector } from "../../features/Movies";

const SearchPanel = () => {
  const { search } = useSelector(metaParamsSelector);
  const searchInputRef = useRef();
  const router = useRouter();

  useEffect(() => {
    searchInputRef.current.value = search;
  }, [search]);

  const onSearch = (e) => {
    e.preventDefault();
    const searchValue = searchInputRef.current.value;
    router.push(searchValue ? `/search/${searchValue}` : "/");
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
