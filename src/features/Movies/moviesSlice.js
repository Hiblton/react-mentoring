import { createSlice } from "@reduxjs/toolkit";
import { fetchMoviesAction, deleteMovieAction } from "./MoviesThunk";

const initialState = {
  movies: [],
  meta: {
    limit: 0,
    offset: 0,
    totalAmount: 0,
  },
  selectedMovie: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    selectMovieAction: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
  extraReducers: {
    [fetchMoviesAction.fulfilled]: (state, action) => {
      const { data: movies, limit, offset, totalAmount } = action.payload;
      state.movies = movies;
      state.meta = { limit, offset, totalAmount };
    },
    [deleteMovieAction.pending]: (state, action) => {
      // console.log('extraReducers', state, action);
      console.log("PENDING DELETE MOVIE", action)
    },
    [deleteMovieAction.rejected]: (state, action) => {
      console.log("FAILED DELETE MOVIE", action)
    },
    [deleteMovieAction.fulfilled]: (state, action) => {
      console.log("SUCCESS DELETE MOVIE", action)
    }
  },
});

export default moviesSlice.reducer;

export const { selectMovieAction } = moviesSlice.actions;

export const moviesSelector = (state) => state.movies;
