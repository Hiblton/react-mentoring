import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MovieModal, DeleteMovieModal } from "../../components";
import { selectMovieAction } from "../../features/Movies";
import styles from "./movieCard.module.scss";

const MovieCard = (movie) => {
  const dispatch = useDispatch();

  const [isEditMovieModalOpened, setEditMovieModalOpened] = useState(false);
  const [isDeleteMovieModalOpened, setDeleteMovieModalOpened] = useState(false);

  const editClickHandle = (e) => {
    e.stopPropagation();
    setEditMovieModalOpened(true);
  };

  const deleteClickHandle = (e) => {
    e.stopPropagation();
    setDeleteMovieModalOpened(true);
  };

  return (
    <>
      <div
        className={styles.movieCard}
        onClick={() => dispatch(selectMovieAction(movie?.id))}
      >
        <div className={styles.actionButtons}>
          <button onClick={editClickHandle}>Edit</button>
          <button onClick={deleteClickHandle}>Delete</button>
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
          modalTitle="EDIT MOVIE"
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
