import React from "react";

import { IMGBanner, LinkBanner, SpotlightWrapper } from "./Spotlight.elements";

const SpotlightBanner = ({ img }) => {
  return (
    <SpotlightWrapper>
      <LinkBanner to="/">
        <IMGBanner data-src={img} className="blur-up lazyload" />
      </LinkBanner>
    </SpotlightWrapper>
  );
};

export default SpotlightBanner;
