import PropTypes from "prop-types";
import { useState } from "react";
import { MovieModal } from "../../components";
import { DeleteMovieModal } from "../../components";
import styles from "./movieCard.module.scss";

const MovieCard = (movie) => {
  const [editMovieModalOpened, editMovieModal] = useState(false);
  const [deleteMovieModalOpened, deleteMovieModal] = useState(false);

  return (
    <>
      <div className={styles.movieCard}>
        <div className={styles.actionButtons}>
          <button onClick={() => editMovieModal(true)}>Edit</button>
          <button onClick={() => deleteMovieModal(true)}>Delete</button>
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
      {editMovieModalOpened && (
        <MovieModal
          title="EDIT MOVIE"
          movie={movie}
          onClose={() => editMovieModal(false)}
        />
      )}
      {deleteMovieModalOpened && (
        <DeleteMovieModal
          id={movie?.id}
          onClose={() => deleteMovieModal(false)}
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
