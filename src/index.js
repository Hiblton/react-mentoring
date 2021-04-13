import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { App } from "./App";
import movies, { fetchMovies } from "./features/movies/moviesSlice";

import "./reset.scss";
import "./global.scss";

const store = configureStore({ reducer: { movies } });
store.dispatch(fetchMovies(100));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
