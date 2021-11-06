import { sendPasswordResetEmail } from "@firebase/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/utils";
import {
  ControlButton,
  ControlInput,
  ControlLabel,
  ControlWrap,
  FormAccount,
  HeadingAccount,
  CancelButton,
} from "../../globalStyles";
import { resetPasswordStart } from "../../redux/User/user.actions";

const ForgetPassword = ({ toggle }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const onSubmit = async (data) => {
    const { customer_email } = data;
    setLoading(true);
    try {
      const result = await sendPasswordResetEmail(auth, customer_email);
      console.log(result);
      dispatch(resetPasswordStart());
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <React.Fragment>
      <HeadingAccount>Reset Password</HeadingAccount>
      <p>We will send you an email to reset your password.</p>
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
            {...register("customer_email")}
          ></ControlInput>
          <ControlButton disabled={loading}>Login</ControlButton>
          <CancelButton type="button" onClick={() => toggle()}>
            Cancel
          </CancelButton>
        </ControlWrap>
      </FormAccount>
    </React.Fragment>
  );
};

export default ForgetPassword;
