import PropTypes from "prop-types";

import styles from "./MovieModal.module.scss";

import { Modal } from "../../layout";

const MovieModal = ({ title, movie, onClose }) => {
  const close = (e) => onClose && onClose(e);

  const genreOptions = [
    "Action & Adventure",
    "Drama, Biography, Music",
    "Oscar winning movie",
  ];

  return (
    <Modal title={title} onClose={() => close()}>
      <form>
        {movie?.id ? (
          <div className={styles.formField}>
            <label>MOVIE ID</label>
            <span>{movie?.id}</span>
          </div>
        ) : null}
        <div className={styles.formField}>
          <label>TITLE</label>
          <input
            required
            placeholder="Title here"
            defaultValue={movie?.title}
          />
        </div>
        <div className={styles.formField}>
          <label>RELEASE DATE</label>
          <input
            required
            placeholder="Select Date"
            type="date"
            defaultValue={movie?.releaseDate}
          />
        </div>
        <div className={styles.formField}>
          <label>MOVIE URL</label>
          <input
            required
            placeholder="Movie URL here"
            type="url"
            defaultValue={movie?.movieUrl}
          />
        </div>
        <div className={styles.formField}>
          <label>GENRE</label>
          <select
            required
            placeholder="Select Genre"
            defaultValue={movie?.genre}
          >
            <option value="">Select Genre</option>
            {genreOptions.map((option) => (
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
            defaultValue={movie?.overview}
          />
        </div>
        <div className={styles.formField}>
          <label>RUNTIME</label>
          <input
            required
            placeholder="Runtime here"
            defaultValue={movie?.runtime}
          />
        </div>
        <div className={styles.formActions}>
          <button type="reset" className={styles.secondaryButton}>
            RESET
          </button>
          <button type="submit" className={styles.primaryButton}>
            SAVE
          </button>
        </div>
      </form>
    </Modal>
  );
};

export { MovieModal };

MovieModal.propTypes = {
  title: PropTypes.string.isRequired,
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
