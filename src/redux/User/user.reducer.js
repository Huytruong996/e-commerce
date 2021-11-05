import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  userErr: null,
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        userErr: null,
      };
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: null,
        loading: false,
      };
    case userTypes.USER_ERROR:
      return {
        ...state,
        userErr: action.payload,
      };
    case userTypes.LOG_OUT_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case userTypes.CHECK_USER_SESSION:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default userReducer;
