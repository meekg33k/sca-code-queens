import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage/index";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  </Router>
);

export default Routes;
