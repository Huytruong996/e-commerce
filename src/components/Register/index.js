import React, { useState } from "react";
import { CustomerRegister } from "./Register.elements";
import {
  ControlButton,
  ControlInput,
  ControlLabel,
  ControlWrap,
  FormAccount,
  HeadingAccount,
} from "../../globalStyles";

import { useForm } from "react-hook-form";
import { AddAccount, RegisterAccount } from "../../firebase/utils";
import { Alert, Slide, Snackbar } from "@mui/material";

const Register = ({ focus }) => {
  const { register, handleSubmit } = useForm();
  const [stateNoti, setSateNoti] = useState({
    open: false,
    message: "",
    severity: "success",
    vertical: "top",
    horizontal: "right",
  });

  const { open, vertical, horizontal, message, severity } = stateNoti;
  const onSubmit = async (data) => {
    const { register_email, register_password, ...rest } = data;

    try {
      const result = await RegisterAccount(register_email, register_password);
      await AddAccount(result.user, rest);
    } catch (e) {}
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
      <CustomerRegister>
        <HeadingAccount>Create New Account</HeadingAccount>
        <p>Create your own Account</p>
        <FormAccount onSubmit={handleSubmit(onSubmit)}>
          <ControlWrap>
            <ControlLabel htmlFor="register_FirstName">First Name</ControlLabel>
            <ControlInput
              type="text"
              id="register_FirstName"
              autoFocus={focus}
              {...register("register_FirstName")}
            ></ControlInput>
          </ControlWrap>
          <ControlWrap>
            <ControlLabel htmlFor="register_LastName">Last Name</ControlLabel>
            <ControlInput
              type="text"
              id="register_LastName"
              {...register("register_LastName")}
            ></ControlInput>
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
              {...register("register_email")}
            ></ControlInput>
          </ControlWrap>
          <ControlWrap>
            <ControlLabel htmlFor="register_password">
              Password <span>*</span>
            </ControlLabel>
            <ControlInput
              type="password"
              id="register_password"
              required
              {...register("register_password")}
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
