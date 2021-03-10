import PropTypes from "prop-types";
import { useState } from "react";
import { MovieModal } from "../../components";
import { DeleteMovieModal } from "../../components";
import styles from "./movieCard.module.scss";

const MovieCard = (movie) => {
  const [movieModalOpened, movieModalState] = useState(false);
  const [deleteMovieModalOpened, deleteMovieModalState] = useState(false);

  return (
    <>
      <div
        className={styles.movieCard}
        onClick={() => deleteMovieModalState(true)}
      >
        <img
          className={styles.movieCover}
          src={movie?.movieUrl}
          alt={movie?.title}
        />
        <div className={styles.description}>
          <h4 className={styles.movieTitle}>{movie?.title}</h4>
          <span className={styles.movieYear}>{movie?.releaseDate}</span>
        </div>
        <span className={styles.movieGenre}>{movie?.genre}</span>
      </div>
      {deleteMovieModalOpened && (
        // <MovieModal
        //   title="EDIT MOVIE"
        //   movie={movie}
        //   onClose={() => movieModalState(false)}
        // />
        <DeleteMovieModal
          id={movie?.id}
          onClose={() => deleteMovieModalState(false)}
        ></DeleteMovieModal>
      )}
    </>
  );
};

export { MovieCard };

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  movieUrl: PropTypes.string.isRequired,
};
