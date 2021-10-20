import React from "react";
import { Route, Switch } from "react-router-dom";

// import {
//     Home,
// } from "../loadables";

import { Home, PriceRule } from "../containers";

import { Docs } from "../pages";

const Routes = () => (
    <Switch>
        <Route path="/price-rule" component={PriceRule} />
        <Route path="/" component={PriceRule} />
    </Switch>
);

export default Routes;
