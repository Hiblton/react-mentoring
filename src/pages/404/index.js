import styles from "./index.module.scss";

import Link from 'next/link'

import { Logo, Title } from "../../components";

const PageNotFound = () => (
  <div className={styles.flexCenter}>
    <Logo />
    <Title title="404" />
    <Title title="Page Not Found" />
    <Link href="/">
      <button type="button" className={styles.secondaryButton}>
        GO BACK TO HOME
      </button>
    </Link>
  </div>
);

export default PageNotFound;
