import { Action } from "redux";
import { user } from "../../data/mockData";
import { AuthState } from "../../types/applicationState/authState";
import { AUTH_SIGN_OUT } from "../actions/authActions";

const initialState: AuthState = {
  loading: false,
  error: null,
  user: user,
};

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case AUTH_SIGN_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
