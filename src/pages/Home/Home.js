import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Header, Footer } from "../../layout";
import { MoviesList } from "../../components";
import {
  selectMovieAction,
  fetchMoviesAction,
  setSearchStringAction,
} from "../../features/Movies";

const HomePage = () => {
  const dispatch = useDispatch();
  let { filmId, searchString } = useParams();

  useEffect(() => {
    if (filmId) {
      dispatch(selectMovieAction(filmId));
    }

    if (searchString) {
      dispatch(setSearchStringAction(searchString));
      dispatch(fetchMoviesAction());
    }
  }, [filmId, searchString]);

  return (
    <>
      <Header />
      <MoviesList />
      <Footer />
    </>
  );
};

export { HomePage };
