import {
    all,
    call,
    fork,
    put,
    takeLatest,
    takeEvery,
} from "redux-saga/effects";

import { POST_DATA } from "../../types";

import { postDataFailed, postDataSucceed } from "../../actions";

import { api, openNotification } from "../../helper";

function* handlePostData(action) {
    try {
        let response = yield call(
            api,
            "POST",
            action.payload.url,
            action.payload.data,
            action.payload.parameters,
            action.payload.headers
        );
        if (response.status === 200) {
            yield put(
                postDataSucceed({
                    data: response.data,
                    state: action.payload.state,
                })
            );
            if (
                response.data.status &&
                response.data.message &&
                !action.payload.hideNotification
            ) {
                all(
                    openNotification(
                        response.data.status,
                        response.data.message
                    )
                );
            }
        } else {
            // all(openNotification("error", action.payload.desc + " failed"));
        }
        if (typeof action.payload.callback === "function") {
            action.payload.callback(response);
        }
    } catch (e) {
        if (typeof action.payload.errorCallback === "function") {
            action.payload.errorCallback(e);
        }
        console.log(e);
        // all(openNotification("error", action.payload.desc + " failed"));
        yield put(postDataFailed());
    }
}

function* watchPostData() {
    yield takeEvery(POST_DATA, handlePostData);
}

function* PostDataSagas() {
    yield all([fork(watchPostData)]);
}

export default PostDataSagas;
