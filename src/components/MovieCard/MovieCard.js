import styles from "./movieCard.module.scss";

const MovieCard = ({ movie }) => (
  <div className={styles.movieCard}>
    <img
      className={styles.movieCover}
      src="https://i.redd.it/a0fjdbjgnx821.jpg"
      alt="Bohemian Phapsody"
    />
    <div className={styles.description}>
      <h4 className={styles.movieTitle}>Bohemian Phapsody</h4>
      <span className={styles.movieYear}>2003</span>
    </div>
    <span className={styles.movieGenre}>Drama, Biography, Music</span>
  </div>
);

export default MovieCard;
