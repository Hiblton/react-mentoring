import "./../reset.scss";
import "./../global.scss";

import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./../store";

import { ErrorFallback } from "./../services";

function CustomApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.reload}
        >
          <Component {...pageProps} />
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  );
}

export default CustomApp;
