import { all, fork } from "redux-saga/effects";
import FetchDataSagas from "./FetchDataSagas";
import PostDataSagas from "./PostDataSagas";

function* RootSaga() {
    yield all([
        fork(FetchDataSagas),
        fork(PostDataSagas),
    ]);
}

export default RootSaga;
