import styles from "./Header.module.scss";
import { useState } from "react";
import {
  Logo,
  Title,
  SearchPanel,
  FilterPanel,
  SortingPanel,
  MovieModal,
} from "../../components";

const Header = () => {
  const [addMovieModalOpened, addMovieModal] = useState(false);

  return (
    <>
      <div className={styles.background}></div>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Logo />
          <button
            className={`${styles.button} ${styles.transparent}`}
            onClick={() => addMovieModal(true)}
          >
            + ADD MOVIE
          </button>
        </div>
        <div className={styles.titleWrapper}>
          <Title title="FIND YOUR MOVIE" />
          <SearchPanel />
        </div>
      </header>

      <section className={styles.toolbarWrapper}>
        <FilterPanel
          filterOptions={["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]}
        />
        <SortingPanel sortingOptions={["RELEASE", "RATING", "DURATION"]} />
      </section>

      {addMovieModalOpened && (
        <MovieModal title="ADD MOVIE" onClose={() => addMovieModal(false)} />
      )}
    </>
  );
};

export { Header };
