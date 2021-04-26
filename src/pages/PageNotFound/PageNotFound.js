import styles from "./PageNotFound.module.scss";

import { Link } from "react-router-dom";

import { Logo, Title } from "../../components";

const PageNotFound = () => (
  <div className={styles.flexCenter}>
    <Logo />
    <Title title="404" />
    <Title title="Page Not Found" />
    <Link to="/">
      <button type="button" className={styles.secondaryButton}>
        GO BACK TO HOME
      </button>
    </Link>
  </div>
);

export { PageNotFound };
