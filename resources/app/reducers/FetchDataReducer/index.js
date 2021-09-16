import { FETCH_DATA, FETCH_DATA_FAILED, FETCH_DATA_SUCCEED } from "../../types";

const defaultStates = {
  loading: false,
};

const FetchDataReducer = (state = defaultStates, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCEED:
      let stateData = action.payload.state;
      stateData = stateData ? stateData : "fetchData";
      let result = {
        ...state,
        loading: false,
      };
      result[stateData] = action.payload.data;
      return result;
    case FETCH_DATA_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return defaultStates;
  }
};

export default FetchDataReducer;
