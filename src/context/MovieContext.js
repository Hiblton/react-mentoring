import { createContext, useReducer } from "react";
import { MovieReducer } from "./MovieReducer";

const movies = require("./../../data.json");

const initialState = {
  movies: movies,
  selectedMovie: null,
};

const MovieContext = createContext();

const MovieProvider = (props) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        selectedMovie: state.selectedMovie,
        dispatch,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
