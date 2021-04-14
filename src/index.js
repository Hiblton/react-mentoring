import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./store";
import { fetchMoviesAction } from "./features/Movies";

import "./reset.scss";
import "./global.scss";

store.dispatch(fetchMoviesAction({limit: 100}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
