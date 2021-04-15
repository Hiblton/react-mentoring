import { API_URL } from "../../config";
import {
  fetchMoviesAction,
  clearSelectedMovieAction,
} from "../../features/Movies";
import { createRequest } from "../API/APIService";

export const fetchMoviesService = async (params = {}) => {
  // TODO hardcoded limit for a demo
  params.limit = 30;
  return await createRequest({ url: `${API_URL}/movies`, params });
};

export const selectMovieService = async (id, { dispatch }) => {
  if (!id) {
    dispatch(clearSelectedMovieAction());
    return;
  }

  return await createRequest({ url: `${API_URL}/movies/${id}` });
};

export const deleteMovieService = async (id, { dispatch }) => {
  await createRequest({ url: `${API_URL}/movies/${id}`, method: "DELETE" });
  dispatch(fetchMoviesAction());
};
