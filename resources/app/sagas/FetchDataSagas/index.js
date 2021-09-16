import {
    all,
    call,
    fork,
    put,
    takeLatest,
    takeEvery
} from "redux-saga/effects";

import { FETCH_DATA } from "../../types";

import { fetchDataFailed, fetchDataSucceed } from "../../actions";

import { api, openNotification } from "../../helper";

function* handleFetchData(action) {
    try {
        let state = action.payload.state;
        let response = yield call(
            api,
            "GET",
            action.payload.url,
            null,
            action.payload.parameters
        );
        if (response.status === 200) {
            yield put(fetchDataSucceed({ data: response.data, state: state }));
        }
        if(typeof action.payload.callback === "function"){
            action.payload.callback(response);
        }

    } catch (e) {
        if(typeof action.payload.errorCallback === "function"){
            action.payload.errorCallback(e);
        }
        console.log(e);
        yield put(fetchDataFailed());
    }
}

function* watchFetchData() {
    yield takeEvery(FETCH_DATA, handleFetchData);
}

function* FetchDataSagas() {
    yield all([fork(watchFetchData)]);
}

export default FetchDataSagas;
