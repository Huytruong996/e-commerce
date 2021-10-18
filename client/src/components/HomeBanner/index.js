import React from "react";
import { SectionContent } from "../../globalStyles";
import SpotlightBanner from "../SpotlightBanner";
import { HomeBannerContainer } from "./HomeBanner.elements";

const HomeBanner = ({ img }) => {
  return (
    <SectionContent>
      <HomeBannerContainer>
        <SpotlightBanner img={img} />
      </HomeBannerContainer>
    </SectionContent>
  );
};

export default HomeBanner;
