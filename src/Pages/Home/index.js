import React, { useContext } from "react";
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
      <header ref={headerRef}>
        <HeaderTop {...HeaderTopData} isSticky={isSticky} />
        <HeaderMenu Home isSticky={isSticky} />
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
      </BodyContent>
    </React.Fragment>
  );
};

export default HomePage;
