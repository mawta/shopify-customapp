import { applyMiddleware, combineReducers, createStore } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import RootSaga from "../sagas";
import FetchDataReducer from "./FetchDataReducer";
import PostDataReducer from "./PostDataReducer";

const Configure = (history) => {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        combineReducers({
            router: connectRouter(history),
            data: FetchDataReducer,
            postData: PostDataReducer,
        }),
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    );
    sagaMiddleware.run(RootSaga);
    return store;
};

export default Configure;
