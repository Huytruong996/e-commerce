import React from "react";
import {
  StarContent,
  StarInner,
  StarRates,
  StartWrap,
} from "./StarRateSection.elements";

const StarRate = ({ value }) => {
  return (
    <StartWrap>
      <StarContent value={value}>
        <svg viewBox="0 0 15 15" x="0" y="0">
          <polygon
            points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          ></polygon>
        </svg>
      </StarContent>
      <svg viewBox="0 0 15 15" x="0" y="0">
        <polygon
          fill="none"
          points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></polygon>
      </svg>
    </StartWrap>
  );
};

const StarRateSection = () => {
  return (
    <StarRates>
      <StarInner>
        <StarRate value="100%" />
        <StarRate value="100%" />
        <StarRate value="100%" />
        <StarRate value="100%" />
        <StarRate value="50%" />
      </StarInner>
    </StarRates>
  );
};

export default StarRateSection;
