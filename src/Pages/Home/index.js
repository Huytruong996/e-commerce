import React, { useEffect } from "react";
import {
  Slider,
  HomeBanner,
  ProductSecionV1,
  ProductSectionV2,
  ProductGridSectionV1,
} from "../../components";
import {
  SLiderData,
  ProductSectionV1Data,
  ProductSectionV2Data,
  ProductGridSectionV1Data,
} from "../../components/Data";

import HomeLayout from "../../layouts/HomeLayout";
const HomePage = () => {
  return (
    <HomeLayout>
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
    </HomeLayout>
  );
};

export default HomePage;
