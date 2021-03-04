import PropTypes from "prop-types";

import styles from "./movieCard.module.scss";

const MovieCard = ({
  title,
  releaseYear,
  genre,
  coverImage = "/default-cover.jpg",
}) => (
  <div className={styles.movieCard}>
    <img className={styles.movieCover} src={coverImage} alt={title} />
    <div className={styles.description}>
      <h4 className={styles.movieTitle}>{title}</h4>
      <span className={styles.movieYear}>{releaseYear}</span>
    </div>
    <span className={styles.movieGenre}>{genre}</span>
  </div>
);

export { MovieCard };

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  coverImage: PropTypes.string,
};
