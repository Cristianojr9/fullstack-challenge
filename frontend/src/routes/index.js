import React from "react";
import { Switch, Route } from "react-router";

import { Home } from "../pages";

const Routes = () => (
  <>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </>
);

export default Routes;