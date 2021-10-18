import React, { useContext } from "react";
import {
  HeaderTop,
  TopBar,
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
  TopBarData,
  SLiderData,
  ProductSectionV1Data,
  ProductSectionV2Data,
  ProductGridSectionV1Data,
  HeaderVerticalMenuData,
} from "../../components/Data";
import FooterHome from "../../components/Footer";
import MenuMobile from "../../components/MenuMobile";
import { GlobalContext } from "../../context/GlobalContext";
import { BodyContent } from "../../globalStyles";
import StickyHeader from "../../helper/StickyHeader";
const HomePage = ({ opened }) => {
  const { headerRef, isSticky } = StickyHeader();
  const { ToggleMenuMbDispatch } = useContext(GlobalContext);

  const handleToggleNavMobile = async () => {
    if (opened) await ToggleMenuMbDispatch({ payload: { opened: !opened } });
  };

  return (
    <React.Fragment>
      {/* <TopBar {...TopBarData} /> */}
      <header ref={headerRef}>
        <HeaderTop {...HeaderTopData} isSticky={isSticky} />
        <HeaderMenu isSticky={isSticky} />
        <MenuMobile {...HeaderVerticalMenuData} opened={opened} />
        <ShopifySectionMobile />
      </header>
      <BodyContent opened={opened} onClick={handleToggleNavMobile}>
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
        <FooterHome />
      </BodyContent>
    </React.Fragment>
  );
};

export default HomePage;
