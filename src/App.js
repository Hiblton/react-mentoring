import { ErrorBoundary } from "react-error-boundary";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import { ErrorFallback } from "./services";
import { HomePage, PageNotFound } from "./pages";

const App = () => (
  <Router>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload}
    >
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/search/:searchString">
          <HomePage />
        </Route>

        <Route path="/film/:filmId">
          <HomePage />
        </Route>

        <Route path="/404">
          <PageNotFound />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </ErrorBoundary>
  </Router>
);

export { App };
