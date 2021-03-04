import { Header, Footer } from "../../layout";
import { MoviesCounter, MoviesList, MoviesNotFound } from "../../components";

const moviesList = require("./../../../data.json");

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

export { HomePage };
