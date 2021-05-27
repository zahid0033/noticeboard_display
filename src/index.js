import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";
import "./assets/Noto-Sans-Bengali-Regular.ttf";

const App = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route path="/:boardid">
            <App />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
