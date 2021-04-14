import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./../features/Movies";

export const store = configureStore({ reducer: { movies: moviesReducer } });
