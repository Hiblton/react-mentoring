import PropTypes from "prop-types";
import styles from "./MovieDetails.module.scss";
import { Title } from "../Title/Title";

const MovieDetails = (movie) => {
  return (
    <>
      <div className={styles.movieDetails}>
        <img
          className={styles.movieCover}
          src={movie?.movieUrl}
          alt={movie?.title}
        />
        <div className={styles.description}>
          <div className={styles.inlineFlex}>
            <Title title={movie?.title} />
            {movie?.rating && (
              <div className={styles.rating}>{movie?.rating}</div>
            )}
          </div>
          <span className={styles.movieGenre}>{movie?.genre}</span>
          <div className={`${styles.inlineFlex} ${styles.dateAndRuntime}`}>
            <div>{new Date(movie?.releaseDate)?.getFullYear()}</div>
            <div className={styles.runtime}>{movie?.runtime} min</div>
          </div>
          <p className={styles.overview}>{movie?.overview}</p>
        </div>
      </div>
    </>
  );
};

export { MovieDetails };

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    movieUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
  }),
};
