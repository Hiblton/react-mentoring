import PropTypes from "prop-types";

import styles from "./MoviesList.module.scss";

import { MovieCard } from "../MovieCard/MovieCard";

const MoviesList = ({ movies = [] }) => {
  return (
    <div className={styles.moviesListWrapper}>
      {movies.map((item) => (
        <MovieCard
          id={item.id}
          title={item.title}
          releaseDate={item.releaseDate}
          genre={item.genre}
          movieUrl={item.movieUrl}
          key={item.id}
        />
      ))}
    </div>
  );
};

export { MoviesList };

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      releaseDate: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      movieUrl: PropTypes.string.isRequired,
    })
  ),
};
