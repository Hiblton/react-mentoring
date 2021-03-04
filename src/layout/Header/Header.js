import styles from "./Header.module.scss";

import {
  Logo,
  ButtonLink,
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
        <ButtonLink href="#" title="+ ADD MOVIE" />
      </div>
      <div className={styles.titleWrapper}>
        <Title title="FIND YOUR MOVIE" />
        <SearchPanel />
      </div>
    </header>

    <section className={styles.toolbarWrapper}>
      <FilterPanel
        filterOptions={["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]}
      />
      <SortingPanel sortingOptions={["RELEASE", "RATING", "DURATION"]} />
    </section>
  </>
);

export { Header };
