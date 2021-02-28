import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "./services";

// TODO: add routing
const App = () => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => window.location.reload} // just for an experiment
  >
    <h1>HomePage component</h1>
  </ErrorBoundary>
);

export default App;
