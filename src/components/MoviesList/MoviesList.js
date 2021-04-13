import styles from "./MoviesList.module.scss";
import { useSelector } from "react-redux";
import { MovieCard, MoviesCounter, MoviesNotFound } from "../../components";

const MoviesList = () => {
  const { movies, meta } = useSelector((state) => state.movies);

  return (
    <main>
      {movies.length > 0 ? (
        <>
          <MoviesCounter count={meta?.totalAmount} />
          <div className={styles.moviesListWrapper}>
            {movies.map((item) => (
              <MovieCard
                id={item.id}
                title={item.title}
                releaseDate={item.release_date}
                genre={item.genres?.join(", ")}
                movieUrl={item.poster_path}
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
