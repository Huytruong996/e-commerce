import React from "react";
import { signInWithGoogle } from "../../firebase/utils";
import {
  ControlButton,
  ControlInput,
  ControlLabel,
  ControlWrap,
  FormAccount,
  HeadingAccount,
} from "../../globalStyles";
import { Action, CustomerLogin, RecoverPassword } from "./Login.elements";
const Login = ({ focus }) => {
  return (
    <React.Fragment>
      <CustomerLogin>
        <HeadingAccount>Login</HeadingAccount>
        <p>Welcome back! Sign in to your account</p>
        <FormAccount>
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
            ></ControlInput>
          </ControlWrap>
          <ControlWrap>
            <ControlLabel htmlFor="customer_password">
              Password <span>*</span>
            </ControlLabel>
            <ControlInput
              type="email"
              id="customer_password"
              required
            ></ControlInput>
          </ControlWrap>
          <ControlWrap>
            <Action>
              <a>Forgotten Password?</a>
            </Action>
            <ControlButton>Login</ControlButton>
            <ControlButton type="button" onClick={signInWithGoogle}>
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
