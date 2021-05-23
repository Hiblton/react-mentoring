import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { selectMovieAction } from "../../features/Movies";
import { Home } from "../../layout";

const FilmPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { filmId } = router.query;

  useEffect(() => {
    if (filmId) {
      dispatch(selectMovieAction(filmId));
    }
  }, [filmId]);

  return <Home />;
};

export default FilmPage;
