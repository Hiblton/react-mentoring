import styles from "./MoviesList.module.scss";

import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <div className={styles.moviesListWrapper}>
      {movies.map((item, index) => (
        <MovieCard movie={item} key={index} />
      ))}
    </div>
  );
};

export default MoviesList;
