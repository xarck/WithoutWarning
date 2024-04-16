import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  LOGOUT_SUCCESS,
} from "../Action/UserAction";

import { toast } from "sonner";

export const initialvalue = {
  user: JSON.parse(localStorage.getItem("user")) || {},
};

export const UserReducer = (state = initialvalue, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      toast.success("Login Successfull");
      return { ...state, user: action.payload.user, session: true };

    case LOGIN_USER_FAILURE:
      alert(action.payload.message);
      return state;

    case REGISTER_USER_SUCCESS:
      toast.success("Registeration Successfull");
      return state;

    case REGISTER_USER_FAILURE:
      alert(action.payload.message);
      return state;

    case LOGOUT_SUCCESS:
      localStorage.clear();
      return { state, user: {} };

    default:
      return state;
  }
};
