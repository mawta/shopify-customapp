import React from "react";
import ReactDOM from "react-dom";

import { Router, HashRouter, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./routes";
import { history } from "./helper";
import Configure from "./reducers";
import { Link } from "./components/";

const store = Configure(history);

ReactDOM.render(
    <BrowserRouter history={history}>
        <Provider store={store}>
            <Routes />
        </Provider>
    </BrowserRouter>,
    document.getElementById("app")
);
