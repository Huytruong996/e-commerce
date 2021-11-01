import React from "react";
import { Route } from "react-router";
import { Row } from "../../globalStyles";
import Login from "../Login";
import Register from "../Register";
import { AccountContentWrap, FormWrapper } from "./AccountContent.elements";

const AccountContent = () => {
  return (
    <AccountContentWrap>
      <Row>
        <div className="col-sm-6 col-xs-12">
          <FormWrapper>
            <Route path="/Login" render={() => <Login focus={true} />} />
            <Route path="/Register" render={() => <Register focus={true} />} />
          </FormWrapper>
        </div>
        <div className="col-sm-6 col-xs-12">
          <FormWrapper>
            <Route path="/Login" render={() => <Register />} />
            <Route path="/Register" render={() => <Login />} />
          </FormWrapper>
        </div>
      </Row>
    </AccountContentWrap>
  );
};

export default AccountContent;
