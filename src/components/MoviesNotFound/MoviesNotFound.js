import styles from "./MoviesNotFound.module.scss";

import { Title } from "../Title/Title";

const MoviesNotFound = () => (
  <div className={styles.titleWrapper}>
    <Title title="No Movies Found" />
  </div>
);

export { MoviesNotFound };
