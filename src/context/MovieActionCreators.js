export const SELECT_MOVIE = "SELECT_MOVIE";

export const selectMovie = (movie) => {
  return { type: SELECT_MOVIE, payload: movie };
};
