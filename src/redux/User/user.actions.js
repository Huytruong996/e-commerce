import userTypes from "./user.types";

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const logOutSuccess = () => ({
  type: userTypes.LOG_OUT_SUCCESS,
});
export const emailSignInStart = (user) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: user,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const userError = (error) => ({
  type: userTypes.USER_ERROR,
  payload: error,
});
