import { Action } from "redux";
import { AuthState } from "../../types/applicationState/authState";

const initialState: AuthState = {
  loading: false,
  error: null,
  user: null,
};

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
