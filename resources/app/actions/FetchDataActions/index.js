import { FETCH_DATA, FETCH_DATA_FAILED, FETCH_DATA_SUCCEED } from "../../types";

const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload: payload,
});

const fetchDataSucceed = (payload) => ({
  type: FETCH_DATA_SUCCEED,
  payload: payload,
});

const fetchDataFailed = () => ({
  type: FETCH_DATA_FAILED,
});

export { fetchData, fetchDataSucceed, fetchDataFailed };
