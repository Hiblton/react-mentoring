export const MovieReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_MOVIE": {
      return {
        ...state,
        selectedMovie: action.payload,
      };
    }
    default:
      return state;
  }
};
