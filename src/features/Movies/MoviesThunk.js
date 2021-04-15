import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteMovie, fetchMovies } from "../../services/Movies/MoviesService";

export const fetchMoviesAction = createAsyncThunk(
  "fetchMoviesAction",
  fetchMovies
);

export const deleteMovieAction = createAsyncThunk(
  "deleteMovieAction",
  async (id, {dispatch}) => {
    const response = await deleteMovie(id)
    dispatch(fetchMoviesAction())
    return response;
  }
);
