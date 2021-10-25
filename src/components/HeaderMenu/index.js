import React from "react";
import {
  HeaderVerticalMenuData,
  HeaderHorizontalMenuData,
  HeaderMenuRightData,
} from "../Data";
import HeaderHorizontalMenu from "../HeaderHorizontalMenu";
import HeaderVerticalMenu from "../HeaderVerticalMenu";
import HeaderMenuRight from "../HeaderMenuRight";

import {
  HeaderMenuContainer,
  HeaderMenuLeftWrapper,
  HeaderMenuRightWrapper,
} from "./HeaderMenu.element";

const HeaderMenu = ({ Home, isSticky }) => {
  return (
    <HeaderMenuContainer>
      <HeaderMenuLeftWrapper>
        <HeaderVerticalMenu
          Home={Home}
          {...HeaderVerticalMenuData}
          isSticky={isSticky}
        />
        <HeaderHorizontalMenu {...HeaderHorizontalMenuData} />
      </HeaderMenuLeftWrapper>
      {/* <HeaderMenuRightWrapper>
          <HeaderMenuRight {...HeaderMenuRightData} />
        </HeaderMenuRightWrapper> */}
    </HeaderMenuContainer>
  );
};

export default HeaderMenu;
