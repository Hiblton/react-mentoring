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
    <header>
      <Logo />
      <Link href="#" title="+ ADD MOVIE"></Link>
      <Title title="FIND YOUR MOVIE"></Title>
      <SearchPanel></SearchPanel>
    </header>
    <section>
      <FilterPanel></FilterPanel>
      <SortingPanel></SortingPanel>
    </section>
  </>
);

export default Header;
