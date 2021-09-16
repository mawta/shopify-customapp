import { POST_DATA, POST_DATA_FAILED, POST_DATA_SUCCEED } from "../../types";

const defaultStates = {
    loading: false
};

const PostDataReducer = (state = defaultStates, action) => {
    switch (action.type) {
        case POST_DATA:
            return {
                ...state,
                loading: true,
                data: action.payload.data
            };
        case POST_DATA_SUCCEED:
            let stateData = action.payload.state;
            stateData = stateData ? stateData : "postData";
            let result = {
                ...state,
                loading: false
            };
            result[stateData] = action.payload.data;
            return result;
        case POST_DATA_FAILED:
            return {
                ...state,
                loading: false
            };

        default:
            return defaultStates;
    }
};

export default PostDataReducer;
