import PropTypes from "prop-types";

import styles from "./MoviesList.module.scss";

import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({ movies = [] }) => {
  return (
    <div className={styles.moviesListWrapper}>
      {movies.map((item) => (
        <MovieCard
          title={item.title}
          releaseYear={item.releaseYear}
          genre={item.genre}
          coverImage={item.coverImage}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      releaseYear: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      coverImage: PropTypes.string.isRequired,
    })
  ),
};
