import styles from "./MoviesList.module.scss";

import { MovieCard, MoviesCounter, MoviesNotFound } from "../../components";
import { useContext } from "react";
import { MovieContext } from "../../context";

const MoviesList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <main>
      {movies.length > 0 ? (
        <>
          <MoviesCounter count={movies.length} />
          <div className={styles.moviesListWrapper}>
            {movies.map((item) => (
              <MovieCard
                id={item.id}
                title={item.title}
                releaseDate={item.releaseDate}
                genre={item.genre}
                movieUrl={item.movieUrl}
                overview={item.overview}
                runtime={item.runtime}
                key={item.id}
              />
            ))}
          </div>
        </>
      ) : (
        <MoviesNotFound />
      )}
    </main>
  );
};

export { MoviesList };
