import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Account,
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
import { logOutSuccess } from "../../redux/User/user.actions";
function TopBar({ addressContact, emailContact }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logOutSuccess());
  };
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
          {!currentUser && (
            <Account>
              <Link to="/Account/Register">
                <svg version="1.1" width="13" height="13" viewBox="0 0 59 64">
                  <path d="M28.224 0h2.496c4.544 0.256 9.088 1.984 12.48 5.056 5.568 4.928 8.256 13.056 6.336 20.288-1.216 4.864-4.416 9.024-8.384 12.032 6.4 2.944 12.16 7.744 15.040 14.272 1.728 3.712 2.56 7.744 2.88 11.776v0.576h-5.888c-0.064-5.568-2.112-11.2-5.824-15.36-4.864-5.568-12.416-8.576-19.776-7.872-7.296 0.576-14.144 4.864-18.176 11.008-2.368 3.584-3.328 7.936-3.52 12.224h-5.888v-0.64c0.384-4.032 1.216-8 2.88-11.712 2.88-6.528 8.64-11.328 15.040-14.272-6.144-4.16-9.536-11.776-8.832-19.072 0.704-9.728 9.472-17.792 19.136-18.304M26.304 6.208c-5.44 0.96-9.92 5.376-11.136 10.752-1.92 7.040 2.56 15.168 9.6 17.216 6.848 2.24 14.976-1.024 18.176-7.552 2.88-5.696 1.216-13.056-3.648-17.216-3.456-3.136-8.448-4.16-12.992-3.2z"></path>
                </svg>
                Register
              </Link>
              <span>or</span>
              <Link to="/Account/Login">Login</Link>
            </Account>
          )}
          {currentUser && (
            <Account>
              <Link to="/Account/Register">
                <svg version="1.1" width="13" height="13" viewBox="0 0 59 64">
                  <path d="M28.224 0h2.496c4.544 0.256 9.088 1.984 12.48 5.056 5.568 4.928 8.256 13.056 6.336 20.288-1.216 4.864-4.416 9.024-8.384 12.032 6.4 2.944 12.16 7.744 15.040 14.272 1.728 3.712 2.56 7.744 2.88 11.776v0.576h-5.888c-0.064-5.568-2.112-11.2-5.824-15.36-4.864-5.568-12.416-8.576-19.776-7.872-7.296 0.576-14.144 4.864-18.176 11.008-2.368 3.584-3.328 7.936-3.52 12.224h-5.888v-0.64c0.384-4.032 1.216-8 2.88-11.712 2.88-6.528 8.64-11.328 15.040-14.272-6.144-4.16-9.536-11.776-8.832-19.072 0.704-9.728 9.472-17.792 19.136-18.304M26.304 6.208c-5.44 0.96-9.92 5.376-11.136 10.752-1.92 7.040 2.56 15.168 9.6 17.216 6.848 2.24 14.976-1.024 18.176-7.552 2.88-5.696 1.216-13.056-3.648-17.216-3.456-3.136-8.448-4.16-12.992-3.2z"></path>
                </svg>
                {currentUser.DisplayName}
              </Link>
              <span>or</span>
              <Link to="#" onClick={() => handleLogout()}>
                Logout
              </Link>
            </Account>
          )}
        </TopBarRight>
      </TopBarContainer>
    </TopBarWrapper>
  );
}

export default TopBar;
