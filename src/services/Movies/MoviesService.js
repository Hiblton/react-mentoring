import { API_URL } from "../../config";
import { fetchMoviesAction } from "../../features/Movies";
import { createRequest } from "../API/APIService";

export const fetchMoviesService = async (params = {}, { getState }) => {
  params = {
    ...getState()?.movies?.meta,
    ...params,
  };
  return await createRequest({ url: `${API_URL}/movies`, params });
};

export const selectMovieService = async (id) => {
  return await createRequest({ url: `${API_URL}/movies/${id}` });
};

export const addMovieService = async (movie, { dispatch }) => {
  await createRequest({
    url: `${API_URL}/movies`,
    method: "POST",
    body: JSON.stringify(movie),
  });
  dispatch(fetchMoviesAction());
};

export const updateMovieService = async (movie, { dispatch }) => {
  await createRequest({
    url: `${API_URL}/movies`,
    method: "PUT",
    body: JSON.stringify(movie),
  });
  dispatch(fetchMoviesAction());
};

export const deleteMovieService = async (id, { dispatch }) => {
  await createRequest({ url: `${API_URL}/movies/${id}`, method: "DELETE" });
  dispatch(fetchMoviesAction());
};
