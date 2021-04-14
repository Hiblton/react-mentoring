import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteMovie, fetchMovies } from "../../services/Movies/MoviesService";

export const fetchMoviesAction = createAsyncThunk(
  "fetchMoviesAction",
  fetchMovies
);

export const deleteMovieAction = createAsyncThunk(
  "deleteMovieAction",
  deleteMovie
);
