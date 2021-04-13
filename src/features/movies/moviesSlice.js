import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  meta: {
    limit: 0,
    offset: 0,
    totalAmount: 0,
  },
  selectedMovie: null,
};

export const fetchMovies = createAsyncThunk(
  "fetchMovies",
  async (limit = 10) => {
    const response = await fetch(`http://localhost:4000/movies?limit=${limit}`);
    const movies = await response.json();
    return movies;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
      const { data: movies, limit, offset, totalAmount } = action.payload;
      state.movies = movies;
      state.meta = { limit, offset, totalAmount };
    },
  },
});

export const { selectMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
