import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
const WithAuth = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  if (!currentUser) {
    return <Redirect to="/Account" />;
  }
  return props.children;
};
export default WithAuth;
