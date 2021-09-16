import React from "react";
import { Route, Switch } from "react-router-dom";

// import {
//     Home,
// } from "../loadables";

import {
    Home,
} from "../containers";

import { Docs } from "../pages";

const Routes = () => (
    <Switch>
        <Route path="/" component={Home} />
    </Switch>
);

export default Routes;
