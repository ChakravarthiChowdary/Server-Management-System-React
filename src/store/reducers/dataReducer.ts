import { Action } from "redux";
import { DataState } from "../../types/applicationState/dataState";

const initialState: DataState = {
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action: Action) => {
  return state;
};

export default dataReducer;
