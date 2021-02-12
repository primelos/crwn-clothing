import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (currentState = INITIAL_STATE, action) => {
  // const { type } = action
  // switch(type){
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...currentState,
        currentUser: action.payload,
        error: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...currentState,
        currentUser: null,
        error: null
      }

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...currentState,
        error: action.payload,
      };
    default:
      return currentState;
  }
}

export default userReducer