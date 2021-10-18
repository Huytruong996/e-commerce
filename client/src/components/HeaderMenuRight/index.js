import React from "react";
import { IconDelivery } from "./HeaderMenuRight.elements";

const HeaderMenuRight = ({ text }) => {
  return (
    <React.Fragment>
      <IconDelivery />
      <span>{text}</span>
    </React.Fragment>
  );
};

export default HeaderMenuRight;
