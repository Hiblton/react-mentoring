import styles from "./Header.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Logo,
  Title,
  SearchPanel,
  FilterPanel,
  SortingPanel,
  MovieModal,
  MovieDetails,
} from "../../components";
import { selectMovieAction } from "../../features/Movies";

const Header = () => {
  const dispatch = useDispatch();
  const { selectedMovie } = useSelector((state) => state.movies);

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
              onClick={() => dispatch(selectMovieAction(null))}
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
          <MovieDetails movie={selectedMovie} />
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
