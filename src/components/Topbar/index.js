import React from "react";
import { Link } from "react-router-dom";
import {
  Address,
  Contact,
  Email,
  IconAddress,
  IconEmail,
  TopBarContainer,
  TopBarLeft,
  TopBarRight,
  TopBarWrapper,
  TrackOrder,
} from "./Topbar.elements";
function TopBar({ addressContact, emailContact }) {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <TopBarLeft>
          <Address>
            <IconAddress />
            <Link to={addressContact.link}>{addressContact.name}</Link>
          </Address>
          <Email>
            <IconEmail />
            <Link to={emailContact.link}>{emailContact.name}</Link>
          </Email>
        </TopBarLeft>
        <TopBarRight>
          <Contact>
            <Link to="/">Contact</Link>
          </Contact>
          <TrackOrder>
            <Link to="/">Track Your Order</Link>
          </TrackOrder>
        </TopBarRight>
      </TopBarContainer>
    </TopBarWrapper>
  );
}

export default TopBar;
