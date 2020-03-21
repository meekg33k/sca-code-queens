import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/LandingPage/index";
import EventPage from "../pages/EventPage/index";


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route  path="/event" component={EventPage} />
    </Switch>
  </Router>
);

export default Routes;
