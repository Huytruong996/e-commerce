import React from "react";
import { Route, useHistory, useLocation } from "react-router";
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
            <Route path="/Account" render={() => <Login focus={true} />} />
            <Route
              path="/Account/Register"
              render={() => <Register focus={true} />}
            />
          </FormWrapper>
        </div>
        <div className="col-sm-6 col-xs-12">
          <FormWrapper>
            <Route path="/Account" render={() => <Register />} />
            <Route path="/Account/Register" render={() => <Login />} />
          </FormWrapper>
        </div>
      </Row>
    </AccountContentWrap>
  );
};

export default AccountContent;
