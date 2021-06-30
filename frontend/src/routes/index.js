import React from "react";
import { Switch, Route } from "react-router";

import { DefaultLayout } from "../_layouts";

const Routes = () => (
  <Switch>
    <Route path="/" component={DefaultLayout} />
  </Switch>
);

export default Routes;