import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export const IMGBanner = styled.img`
  width: 100%;
  vertical-align: middle;
`;

export const LinkBanner = styled(Link)`
  :hover ${IMGBanner} {
    opacity: 0.8;
  }
`;

export const SpotlightWrapper = styled.div`
  margin: 0 0 10px;
`;
