import React from "react";
import { CustomerRegister } from "./Register.elements";
import {
  ControlButton,
  ControlInput,
  ControlLabel,
  ControlWrap,
  FormAccount,
  HeadingAccount,
} from "../../globalStyles";
const Register = ({ focus }) => {
  return (
    <React.Fragment>
      <CustomerRegister>
        <HeadingAccount>Create New Account</HeadingAccount>
        <p>Create your own Account</p>
        <FormAccount>
          <ControlWrap>
            <ControlLabel htmlFor="register_FirstName">First Name</ControlLabel>
            <ControlInput
              type="text"
              id="register_FirstName"
              autoFocus={focus}
            ></ControlInput>
          </ControlWrap>
          <ControlWrap>
            <ControlLabel htmlFor="register_LastName">Last Name</ControlLabel>
            <ControlInput type="text" id="register_LastName"></ControlInput>
          </ControlWrap>
          <ControlWrap>
            <ControlLabel htmlFor="register_email">
              Email Address
              <span>*</span>
            </ControlLabel>
            <ControlInput
              type="email"
              id="register_email"
              required
            ></ControlInput>
          </ControlWrap>
          <ControlWrap>
            <ControlLabel htmlFor="register_password">
              Password <span>*</span>
            </ControlLabel>
            <ControlInput
              type="email"
              id="register_password"
              required
            ></ControlInput>
          </ControlWrap>
          <ControlWrap>
            <ControlButton>Register</ControlButton>
          </ControlWrap>
        </FormAccount>
      </CustomerRegister>
    </React.Fragment>
  );
};

export default Register;
