import React, { useContext, useEffect, useState } from "react";

import {
  BackgroundFade,
  CartIconMobile,
  Count,
  HeaderLink,
  HeaderTopCenter,
  HeaderTopContainer,
  HeaderTopLeft,
  HeaderTopLogo,
  HeaderTopRight,
  HeaderTopRow,
  HeaderTopSearchForm,
  HeaderWrapTop,
  IMGLogo,
  InputSearch,
  MenuResponsive,
  MostSeacrhItem,
  MostSearchMenu,
  MostSearchWrapper,
  NavBarResponsiveWrap,
  NumberCart,
  NumberWrapper,
  Price,
  SearchBox,
  SearchIcon,
  SearchIconMobile,
  SearchSubmit,
} from "./HeaderTop.elements";
import { Link, useHistory } from "react-router-dom";
import GlobalStyle from "../../globalStyles";
import MenuMobile from "../MenuMobile";
import { HeaderVerticalMenuData } from "../Data";
import { useToggle } from "../../customHooks";

const HeaderTop = ({
  img,
  alt,
  mostSearchItems,
  CompareLink,
  WishListLink,
  CartLink,
  isSticky,
}) => {
  // const [toggle, setToggle] = useState(false);
  const [isToggle, toggle] = useToggle(false);
  const history = useHistory();
  const handleLogo = () => {
    history.push("/");
  };
  return (
    <div>
      <BackgroundFade opened={isToggle} onClick={() => toggle()} />
      <MenuMobile {...HeaderVerticalMenuData} opened={isToggle} />
      <GlobalStyle opened={isToggle} />
      <HeaderWrapTop isSticky={isSticky}>
        <HeaderTopContainer>
          <HeaderTopRow>
            <NavBarResponsiveWrap onClick={() => toggle()}>
              <MenuResponsive>
                <span></span>
                <span></span>
                <span></span>
              </MenuResponsive>
            </NavBarResponsiveWrap>
            <HeaderTopLeft>
              <HeaderTopLogo>
                <Link to="/" onClick={() => handleLogo()}>
                  <IMGLogo src={img} alt={alt} />
                </Link>
              </HeaderTopLogo>
            </HeaderTopLeft>
            <SearchIconMobile>
              <svg width="20" height="20" viewBox="0 0 61 64">
                <path d="M16.64 2.24c5.888-2.56 12.672-2.88 18.816-0.96 6.016 1.92 11.2 6.080 14.592 11.392 3.648 5.568 5.12 12.48 4.224 19.072-0.64 5.312-2.944 10.368-6.336 14.464 4.288 4.416 8.64 8.768 12.864 13.184-1.408 1.536-3.072 2.944-4.288 4.608h-0.32c-0.064-0.448-0.576-0.64-0.768-0.96-4.096-4.16-8.128-8.32-12.16-12.416-4.672 3.456-10.496 5.376-16.384 5.312-6.080-0.064-12.096-2.368-16.768-6.208-6.272-5.184-9.984-13.184-10.112-21.312v-0.832c0.064-4.736 1.344-9.536 3.712-13.632 2.88-5.184 7.488-9.408 12.928-11.712M26.048 3.328c-8.448 0.384-16.32 5.696-20.096 13.184-2.816 5.504-3.456 12.096-1.856 18.112 1.472 5.44 4.864 10.304 9.472 13.632 3.84 2.752 8.576 4.288 13.312 4.352 5.056 0.128 10.112-1.472 14.208-4.48 3.776-2.688 6.72-6.464 8.384-10.752 2.432-5.888 2.432-12.8 0.064-18.752-1.92-4.864-5.504-9.088-9.984-11.84-4.032-2.496-8.832-3.712-13.504-3.456z"></path>
              </svg>
            </SearchIconMobile>
            <CartIconMobile>
              <Link to={CartLink}>
                <svg width="32" height="25" viewBox="0 0 448 512">
                  <path d="M564 192h-72.902L362.286 40.457c-8.583-10.099-23.729-11.327-33.83-2.743-10.099 8.584-11.327 23.731-2.742 33.83L428.102 192H147.899L250.287 71.543c8.584-10.099 7.356-25.246-2.743-33.83s-25.246-7.355-33.83 2.743L84.901 192H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h18.667l27.584 198.603C61.546 462.334 81.836 480 105.794 480h364.412c23.958 0 44.248-17.666 47.544-41.397L545.333 240H564c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12zm-93.794 240H105.794L79.127 240h417.745l-26.666 192zM312 296v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24zm112 0v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24zm-224 0v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24z"></path>
                </svg>
                <NumberCart>
                  <Count>2</Count>
                  <Price>$1,350.00</Price>
                </NumberCart>
              </Link>
            </CartIconMobile>
            <HeaderTopCenter>
              <div>
                <HeaderTopSearchForm>
                  <SearchBox>
                    <InputSearch placeholder="Search product..." />
                  </SearchBox>
                  <SearchSubmit type="submit" title="Search">
                    <SearchIcon>
                      <svg width="20" height="20" viewBox="0 0 61 64">
                        <path d="M16.64 2.24c5.888-2.56 12.672-2.88 18.816-0.96 6.016 1.92 11.2 6.080 14.592 11.392 3.648 5.568 5.12 12.48 4.224 19.072-0.64 5.312-2.944 10.368-6.336 14.464 4.288 4.416 8.64 8.768 12.864 13.184-1.408 1.536-3.072 2.944-4.288 4.608h-0.32c-0.064-0.448-0.576-0.64-0.768-0.96-4.096-4.16-8.128-8.32-12.16-12.416-4.672 3.456-10.496 5.376-16.384 5.312-6.080-0.064-12.096-2.368-16.768-6.208-6.272-5.184-9.984-13.184-10.112-21.312v-0.832c0.064-4.736 1.344-9.536 3.712-13.632 2.88-5.184 7.488-9.408 12.928-11.712M26.048 3.328c-8.448 0.384-16.32 5.696-20.096 13.184-2.816 5.504-3.456 12.096-1.856 18.112 1.472 5.44 4.864 10.304 9.472 13.632 3.84 2.752 8.576 4.288 13.312 4.352 5.056 0.128 10.112-1.472 14.208-4.48 3.776-2.688 6.72-6.464 8.384-10.752 2.432-5.888 2.432-12.8 0.064-18.752-1.92-4.864-5.504-9.088-9.984-11.84-4.032-2.496-8.832-3.712-13.504-3.456z"></path>
                      </svg>
                    </SearchIcon>
                  </SearchSubmit>
                </HeaderTopSearchForm>
              </div>
              <MostSearchWrapper>
                <label>Most searched :</label>
                <MostSearchMenu>
                  {mostSearchItems &&
                    mostSearchItems.map((item, index) => (
                      <MostSeacrhItem key={index}>
                        <Link to={item.link}>{item.name}</Link>
                      </MostSeacrhItem>
                    ))}
                </MostSearchMenu>
              </MostSearchWrapper>
            </HeaderTopCenter>
            <HeaderTopRight>
              <HeaderLink>
                <div>
                  <Link to={CompareLink}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="25"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path>
                    </svg>
                    <NumberWrapper>
                      <Count>2</Count>
                    </NumberWrapper>
                  </Link>
                </div>
                <div>
                  <Link to={WishListLink}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="25"
                      viewBox="0 0 448 512"
                    >
                      <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                    </svg>
                    <NumberWrapper>
                      <Count>2</Count>
                    </NumberWrapper>
                  </Link>
                </div>
                <div>
                  <Link
                    to={CartLink}
                    style={{
                      display: "flex",
                      textAlign: "start",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="25"
                      viewBox="0 0 448 512"
                    >
                      <path d="M564 192h-72.902L362.286 40.457c-8.583-10.099-23.729-11.327-33.83-2.743-10.099 8.584-11.327 23.731-2.742 33.83L428.102 192H147.899L250.287 71.543c8.584-10.099 7.356-25.246-2.743-33.83s-25.246-7.355-33.83 2.743L84.901 192H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h18.667l27.584 198.603C61.546 462.334 81.836 480 105.794 480h364.412c23.958 0 44.248-17.666 47.544-41.397L545.333 240H564c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12zm-93.794 240H105.794L79.127 240h417.745l-26.666 192zM312 296v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24zm112 0v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24zm-224 0v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24z"></path>
                    </svg>

                    <NumberCart>
                      <Count>2</Count>
                      <Price>$1,350.00</Price>
                    </NumberCart>
                  </Link>
                </div>
              </HeaderLink>
            </HeaderTopRight>
          </HeaderTopRow>
        </HeaderTopContainer>
      </HeaderWrapTop>
    </div>
  );
};

export default HeaderTop;
