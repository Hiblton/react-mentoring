import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { MovieModal, DeleteMovieModal } from "../../components";
import { MovieContext } from "../../context";
import styles from "./movieCard.module.scss";

const MovieCard = (movie) => {
  const { dispatch } = useContext(MovieContext);
  const [isEditMovieModalOpened, setEditMovieModalOpened] = useState(false);
  const [isDeleteMovieModalOpened, setDeleteMovieModalOpened] = useState(false);

  return (
    <>
      <div
        className={styles.movieCard}
        onClick={() => dispatch({ type: "SELECT_MOVIE", payload: movie })}
      >
        <div className={styles.actionButtons}>
          <button onClick={() => setEditMovieModalOpened(true)}>Edit</button>
          <button onClick={() => setDeleteMovieModalOpened(true)}>
            Delete
          </button>
        </div>
        <img
          className={styles.movieCover}
          src={movie?.movieUrl}
          alt={movie?.title}
        />
        <div className={styles.description}>
          <h4 className={styles.movieTitle}>{movie?.title}</h4>
          <span className={styles.movieYear}>
            {new Date(movie?.releaseDate)?.getFullYear()}
          </span>
        </div>
        <span className={styles.movieGenre}>{movie?.genre}</span>
      </div>
      {isEditMovieModalOpened && (
        <MovieModal
          title="EDIT MOVIE"
          movie={movie}
          onClose={() => setEditMovieModalOpened(false)}
        />
      )}
      {isDeleteMovieModalOpened && (
        <DeleteMovieModal
          id={movie?.id}
          onClose={() => setDeleteMovieModalOpened(false)}
        ></DeleteMovieModal>
      )}
    </>
  );
};

export { MovieCard };

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  movieUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
};
