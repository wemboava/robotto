import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import Chat from "../pages/chat";

const Routes = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/chat" component={Chat} exact />
  </Switch>
);

export default Routes;
