import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addMovieService,
  deleteMovieService,
  fetchMoviesService,
  selectMovieService,
  updateMovieService,
} from "../services/Movies/MoviesService";

const initialState = {
  movies: [],
  meta: {
    filter: "",
    search: "",
    searchBy: "title",
    sortBy: "",
    sortOrder: "ASC",
    totalAmount: 0,
  },
  selectedMovie: null,
};

export const fetchMoviesAction = createAsyncThunk(
  "fetchMoviesAction",
  fetchMoviesService
);

export const selectMovieAction = createAsyncThunk(
  "selectMovieAction",
  selectMovieService
);

export const addMovieAction = createAsyncThunk(
  "addMovieAction",
  addMovieService
);

export const updateMovieAction = createAsyncThunk(
  "updateMovieAction",
  updateMovieService
);

export const deleteMovieAction = createAsyncThunk(
  "deleteMovieAction",
  deleteMovieService
);

export const moviesSelector = (state) => state.movies;

export const metaParamsSelector = (state) => state.movies.meta;

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearSelectedMovieAction: (state) => {
      state.selectedMovie = null;
    },
    setActiveFilterAction: (state, { payload }) => {
      state.meta.filter = payload.filter;
    },
    setActiveSortingAction: (state, { payload }) => {
      state.meta.sortBy = payload.sortBy;
    },
    setSearchStringAction: (state, { payload }) => {
      state.meta.search = payload;
    },
  },
  extraReducers: {
    [fetchMoviesAction.fulfilled]: (state, action) => {
      const { data: movies, limit, offset, totalAmount } = action.payload;
      state.movies = movies;
      state.meta = { ...state.meta, limit, offset, totalAmount };
    },
    [selectMovieAction.fulfilled]: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const moviesReducer = moviesSlice.reducer;

export const {
  clearSelectedMovieAction,
  setActiveFilterAction,
  setActiveSortingAction,
  setSearchStringAction,
} = moviesSlice.actions;
