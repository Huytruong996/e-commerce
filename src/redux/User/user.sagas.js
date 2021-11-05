import userTypes from "./user.types";
import { takeLatest, call, all, put } from "redux-saga/effects";
import { auth, getCurrentUser, handleUserProfile } from "../../firebase/utils";
import { signOut } from "@firebase/auth";
import { signInSuccess } from "./user.actions";

export function* getSnapShotUserAuth(userAuth) {
  try {
    const userRef = yield call(handleUserProfile, userAuth);
    yield put(
      signInSuccess({
        id: userRef.id,
        ...userRef.data(),
      })
    );
  } catch (error) {
    // console.log(error);
    yield put(signInSuccess());
  }
}

export function* isAuthencation() {
  try {
    const userAuth = yield getCurrentUser();
    yield getSnapShotUserAuth(userAuth);
  } catch (error) {
    // console.log(error);
  }
}

export function* logOutUser() {
  try {
    yield signOut(auth);
  } catch (error) {
    // console.log(error);
  }
}

export function* emailSignIn({ payload }) {
  try {
    const { userAuth } = payload;
    yield getSnapShotUserAuth(userAuth.user);
  } catch (error) {
    // console.log(error);
  }
}

export function* onLogOutUserStart() {
  yield takeLatest(userTypes.LOG_OUT_SUCCESS, logOutUser);
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isAuthencation);
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onLogOutUserStart),
  ]);
}
