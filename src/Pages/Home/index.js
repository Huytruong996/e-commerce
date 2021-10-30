import React, { useContext, useState } from "react";
import {
  HeaderTop,
  HeaderMenu,
  Slider,
  HomeBanner,
  ProductSecionV1,
  ProductSectionV2,
  ProductGridSectionV1,
  ShopifySectionMobile,
} from "../../components";
import {
  HeaderTopData,
  SLiderData,
  ProductSectionV1Data,
  ProductSectionV2Data,
  ProductGridSectionV1Data,
  HeaderVerticalMenuData,
} from "../../components/Data";
import MenuMobile from "../../components/MenuMobile";
import StickyHeader from "../../helper/StickyHeader";
const HomePage = ({ opened, handleToggle, handleToggleBody }) => {
  const { headerRef, isSticky } = StickyHeader();

  return (
    <React.Fragment>
      <header ref={headerRef}>
        <HeaderTop
          {...HeaderTopData}
          isSticky={isSticky}
          handleToggle={handleToggle}
        />
        <HeaderMenu Home isSticky={isSticky} />
        <ShopifySectionMobile />
      </header>
      <Slider {...SLiderData} />
      <HomeBanner
        img={
          require("../../images/SpotLightBanner/spotlightbanner.jpg").default
        }
      />
      <ProductSecionV1 {...ProductSectionV1Data} />
      <ProductSectionV2 {...ProductSectionV2Data} />
      <HomeBanner
        img={
          require("../../images/SpotLightBanner/home-v5-banner_1920x.png")
            .default
        }
      />
      <ProductGridSectionV1 {...ProductGridSectionV1Data} />
    </React.Fragment>
  );
};

export default HomePage;
