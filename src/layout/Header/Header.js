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
import { moviesSelector, clearSelectedMovieAction } from "../../features/Movies";

const Header = () => {
  const dispatch = useDispatch();
  const { selectedMovie } = useSelector(moviesSelector);

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
              onClick={() => dispatch(clearSelectedMovieAction())}
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
          <MovieDetails
            title={selectedMovie.title}
            releaseDate={selectedMovie.release_date}
            genre={selectedMovie.genres?.join(", ")}
            movieUrl={selectedMovie.poster_path}
            overview={selectedMovie.overview}
            runtime={selectedMovie.runtime}
            rating={selectedMovie.rating}
          />
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
          modalTitle="ADD MOVIE"
          onClose={() => setAddMovieModalOpened(false)}
        />
      )}
    </>
  );
};

export { Header };
