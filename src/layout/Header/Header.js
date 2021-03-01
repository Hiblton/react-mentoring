import styles from "./Header.module.scss";

import {
  Logo,
  Link,
  Title,
  SearchPanel,
  FilterPanel,
  SortingPanel,
} from "../../components";

const Header = () => (
  <>
    <div className={styles.background}></div>
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Logo />
        <Link href="#" title="+ ADD MOVIE" />
      </div>
      <div className={styles.titleWrapper}>
        <Title title="FIND YOUR MOVIE" />
        <SearchPanel />
      </div>
    </header>

    <section className={styles.toolbarWrapper}>
      <FilterPanel
        filterList={["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]}
      />
      <SortingPanel sortingList={["RELEASE", "RATING", "DURATION"]} />
    </section>
  </>
);

export default Header;
