import React, { useEffect, useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/utils";
import {
  ControlButton,
  ControlInput,
  ControlLabel,
  ControlWrap,
  FormAccount,
  HeadingAccount,
} from "../../globalStyles";

import { useSelector, useDispatch } from "react-redux";
import { Action, CustomerLogin, RecoverPassword } from "./Login.elements";
import { emailSignInStart } from "../../redux/User/user.actions";
import { useForm } from "react-hook-form";
import { Alert, Slide, Snackbar } from "@mui/material";
import { signInWithEmailAndPassword } from "@firebase/auth";
import firebaseErrors from "../../constants/ERROR_FIREBASE";

const Login = ({ focus }) => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const [stateNoti, setSateNoti] = useState({
    open: false,
    message: "",
    severity: "success",
    vertical: "top",
    horizontal: "right",
  });

  const { open, vertical, horizontal, message, severity } = stateNoti;
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      setSateNoti({
        ...stateNoti,
        open: true,
        message: error,
        severity: "error",
      });
      setLoading(false);
    }
    if (currentUser) {
      reset();
    }
    setLoading(false);
    setError();
  }, [error, currentUser]);

  const onSubmit = async (data) => {
    const { customer_email, customer_password } = data;
    setLoading(true);
    try {
      const userAuth = await signInWithEmailAndPassword(
        auth,
        customer_email,
        customer_password
      );
      await dispatch(emailSignInStart({ userAuth }));
    } catch (error) {
      setError(firebaseErrors[error.code]);
      console.log(error.code);
    }
  };

  const ContentNoti = (props) => {
    return (
      <Slide {...props} direction="down">
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Slide>
    );
  };
  console.log(loading);
  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ horizontal, vertical }}
        open={open}
        autoHideDuration={2000}
        key={vertical + horizontal}
        TransitionComponent={ContentNoti}
        onClose={(event, reason) => setSateNoti({ ...stateNoti, open: false })}
      />
      <CustomerLogin>
        <HeadingAccount>Login</HeadingAccount>
        <p>Welcome back! Sign in to your account</p>
        <FormAccount onSubmit={handleSubmit(onSubmit)}>
          <ControlWrap>
            <ControlLabel htmlFor="customer_email">
              Email Address
              <span>*</span>
            </ControlLabel>
            <ControlInput
              type="email"
              id="customer_email"
              required
              autoFocus={focus}
              {...register("customer_email")}
            ></ControlInput>
          </ControlWrap>
          <ControlWrap>
            <ControlLabel htmlFor="customer_password">
              Password <span>*</span>
            </ControlLabel>
            <ControlInput
              type="password"
              id="customer_password"
              required
              {...register("customer_password")}
            ></ControlInput>
          </ControlWrap>
          <ControlWrap>
            <Action>
              <a>Forgotten Password?</a>
            </Action>
            <ControlButton disabled={loading}>Login</ControlButton>
            <ControlButton
              type="button"
              disabled={loading}
              onClick={signInWithGoogle}
            >
              <img
                width="20px"
                style={{ marginTop: "4px", marginRight: "8px" }}
                alt="Google sign-in"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
              Google
            </ControlButton>
          </ControlWrap>
        </FormAccount>
      </CustomerLogin>
      <RecoverPassword></RecoverPassword>
    </React.Fragment>
  );
};

export default Login;
