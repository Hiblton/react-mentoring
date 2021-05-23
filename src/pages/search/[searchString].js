import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  setSearchStringAction,
  fetchMoviesAction,
} from "../../features/Movies";
import { Home } from "../../layout";

const SearchPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { searchString } = router.query;

  useEffect(() => {
    if (searchString) {
      dispatch(setSearchStringAction(searchString));
      dispatch(fetchMoviesAction());
    }
  }, [searchString]);

  return <Home />;
};

export default SearchPage;
