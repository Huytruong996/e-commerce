import React, { useEffect } from "react";
import {
  HeaderMenu,
  HeaderTop,
  ShopifySectionMobile,
  TopBar,
} from "../components";
import { HeaderTopData, TopBarData } from "../components/Data";
import FooterHome from "../components/Footer";
import StickyHeader from "../helper/StickyHeader";

const HomeLayout = ({ children }) => {
  const { headerRef, isSticky } = StickyHeader();
  useEffect(() => {
    headerRef.current.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <TopBar {...TopBarData} />
      <header ref={headerRef}>
        <HeaderTop {...HeaderTopData} isSticky={isSticky} />
        <HeaderMenu Home isSticky={isSticky} />
        <ShopifySectionMobile />
      </header>
      {children}
      <FooterHome />
    </React.Fragment>
  );
};

export default HomeLayout;
