import { POST_DATA, POST_DATA_FAILED, POST_DATA_SUCCEED } from "../../types";

const postData = payload => ({
    type: POST_DATA,
    payload: payload
});

const postDataSucceed = payload => ({
    type: POST_DATA_SUCCEED,
    payload: payload
});

const postDataFailed = () => ({
    type: POST_DATA_FAILED
});

export { postData, postDataSucceed, postDataFailed };
