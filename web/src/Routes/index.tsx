
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Map from "../pages/Map";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pets" exact component={Map} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
