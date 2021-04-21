import PropTypes from "prop-types";

import styles from "./MovieModal.module.scss";

import { Modal } from "../../layout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieAction, updateMovieAction } from "../../features/Movies";

const GENRE_OPTIONS = ["DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

const MovieModal = ({ modalTitle, movie, onClose }) => {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [releaseDate, setReleaseDate] = useState();
  const [movieUrl, setMovieUrl] = useState();
  const [genre, setGenre] = useState();
  const [overview, setOverview] = useState();
  const [runtime, setRuntime] = useState();

  useEffect(() => {
    if (movie) {
      setId(movie?.id);
      setTitle(movie?.title);
      setReleaseDate(movie?.releaseDate);
      setMovieUrl(movie?.movieUrl);
      setGenre(movie?.genre);
      setOverview(movie?.overview);
      setRuntime(movie?.runtime);
    }
  }, [movie]);

  const close = (e) => onClose && onClose(e);

  const saveMovie = () => {
    const movie = {
      id,
      title,
      release_date: releaseDate,
      poster_path: movieUrl,
      genres: [genre],
      runtime: +runtime,
      overview,
    };

    dispatch(id ? updateMovieAction(movie) : addMovieAction(movie));
    close();
  };

  return (
    <Modal title={modalTitle} onClose={() => close()}>
      <form>
        {id && (
          <div className={styles.formField}>
            <label>MOVIE ID</label>
            <span>{id}</span>
          </div>
        )}
        <div className={styles.formField}>
          <label>TITLE</label>
          <input
            required
            placeholder="Title here"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className={styles.formField}>
          <label>RELEASE DATE</label>
          <input
            required
            placeholder="Select Date"
            type="date"
            onChange={(e) => setReleaseDate(e.target.value)}
            value={releaseDate}
          />
        </div>
        <div className={styles.formField}>
          <label>MOVIE URL</label>
          <input
            required
            placeholder="Movie URL here"
            type="url"
            onChange={(e) => setMovieUrl(e.target.value)}
            value={movieUrl}
          />
        </div>
        <div className={styles.formField}>
          <label>GENRE</label>
          <select
            required
            placeholder="Select Genre"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
          >
            <option value="">Select Genre</option>
            {GENRE_OPTIONS.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formField}>
          <label>OVERVIEW</label>
          <input
            required
            placeholder="Overview here"
            onChange={(e) => setOverview(e.target.value)}
            value={overview}
          />
        </div>
        <div className={styles.formField}>
          <label>RUNTIME</label>
          <input
            required
            placeholder="Runtime here"
            type="number"
            onChange={(e) => setRuntime(e.target.value)}
            value={runtime}
          />
        </div>
        <div className={styles.formActions}>
          <button type="reset" className={styles.secondaryButton}>
            RESET
          </button>
          <button
            type="submit"
            className={styles.primaryButton}
            onClick={saveMovie}
          >
            SAVE
          </button>
        </div>
      </form>
    </Modal>
  );
};

export { MovieModal };

MovieModal.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    movieUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }),
  onClose: PropTypes.func,
};
