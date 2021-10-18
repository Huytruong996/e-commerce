import React from "react";

import { IMGBanner, LinkBanner, SpotlightWrapper } from "./Spotlight.elements";

const SpotlightBanner = ({ img }) => {
  return (
    <SpotlightWrapper>
      <LinkBanner to="/">
        <IMGBanner src={img} />
      </LinkBanner>
    </SpotlightWrapper>
  );
};

export default SpotlightBanner;
