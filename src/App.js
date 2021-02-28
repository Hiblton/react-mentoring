import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "./services";
import { HomePage } from "./pages";

// TODO: add routing
const App = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => window.location.reload} // just for an experiment
  >
    <HomePage></HomePage>
  </ErrorBoundary>
);

export default App;
