import { SELECT_MOVIE } from "./MovieActionCreators";

export const MovieReducer = (state, action) => {
  switch (action.type) {
    case SELECT_MOVIE: {
      return {
        ...state,
        selectedMovie: action.payload,
      };
    }
    default:
      return state;
  }
};
