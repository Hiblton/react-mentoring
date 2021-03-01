import { Header, Footer } from "../../layout";
import { MoviesCounter, MoviesList, MoviesNotFound } from "../../components";

const moviesList = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // todo for test

const HomePage = () => (
  <>
    <Header></Header>
    <main>
      {moviesList.length > 0 ? (
        <>
          <MoviesCounter count={moviesList.length} />
          <MoviesList movies={moviesList} />
        </>
      ) : (
        <MoviesNotFound />
      )}
    </main>
    <Footer></Footer>
  </>
);

export default HomePage;
