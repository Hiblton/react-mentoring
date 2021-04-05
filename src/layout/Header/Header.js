import styles from "./Header.module.scss";
import { useContext, useState } from "react";
import {
  Logo,
  Title,
  SearchPanel,
  FilterPanel,
  SortingPanel,
  MovieModal,
  MovieDetails,
} from "../../components";
import { MovieContext, selectMovie } from "./../../context";

const Header = () => {
  const { selectedMovie, dispatch } = useContext(MovieContext);
  const [isAddMovieModalOpened, setAddMovieModalOpened] = useState(false);

  return (
    <>
      <div className={styles.background}></div>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <Logo />
          {selectedMovie ? (
            <button
              className={`${styles.button} ${styles.transparent}`}
              onClick={() => dispatch(selectMovie(null))}
            >
              SEARCH
            </button>
          ) : (
            <button
              className={`${styles.button} ${styles.transparent}`}
              onClick={() => setAddMovieModalOpened(true)}
            >
              + ADD MOVIE
            </button>
          )}
        </div>
        {selectedMovie ? (
          <MovieDetails movie={selectedMovie}></MovieDetails>
        ) : (
          <div className={styles.titleWrapper}>
            <Title title="FIND YOUR MOVIE" />
            <SearchPanel />
          </div>
        )}
      </header>

      <section className={styles.toolbarWrapper}>
        <FilterPanel
          filterOptions={["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]}
        />
        <SortingPanel sortingOptions={["RELEASE", "RATING", "DURATION"]} />
      </section>

      {isAddMovieModalOpened && (
        <MovieModal
          title="ADD MOVIE"
          onClose={() => setAddMovieModalOpened(false)}
        />
      )}
    </>
  );
};

export { Header };
