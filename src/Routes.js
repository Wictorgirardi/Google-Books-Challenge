import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Minimal as MinimalLayout } from "./layouts";

import { Home as HomeView } from "./views";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MinimalLayout}
        path="/home"
      />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
