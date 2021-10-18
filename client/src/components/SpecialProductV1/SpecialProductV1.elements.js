import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../globalStyles";
import {
  PriceCompare,
  PriceSale,
  ProductWrapper,
} from "../Product/Product.elements";

export const ProductSpecialWrapper = styled(ProductWrapper)`
  border: 2px solid #fed700;
  overflow: hidden;
  margin: 0 0 15px;
  padding: 20px 15px;
  border-radius: 20px 20px 20px 20px;
  @media (min-width: ${Breakpoint.Mobile}) {
    padding: 20px 20px 25px;
    margin: -38px 0 0;
  }
`;

export const BlockSpecialProduct = styled.div`
  ${ProductSpecialWrapper} {
    :after {
      content: none;
    }
  }
`;

export const ProductSpecialHeader = styled.div`
  position: relative;
  margin-bottom: 9px;
`;

export const SpecialOfferText = styled.span`
  position: absolute;
  left: 0;
  top: 20px;
  z-index: 9;
  font-size: 22px;
  color: #333e48;
`;

export const SpecialProductImageSide = styled.span`
  position: relative;
  padding-top: 91.66666666666667%;
  display: block;
`;

export const SpecialProductLabel = styled.span`
  position: absolute;
  top: 1px;
  right: 0px;
  z-index: 1;
  background: #fed700;
  color: #343f49;
  padding: 19px 5px;
  width: 76px;
  height: 76px;
  text-align: center;
  line-height: 1.2;
  border-radius: 50% 50% 50% 50%;
  .text {
    display: block;
    font-size: 12px;
  }
  .percent {
    display: block;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ProductSpecialContent = styled.div`
  text-align: center;
`;

export const DealProgress = styled.div``;

export const DealStock = styled.div`
  width: 100%;
  overflow: hidden;
  text-align: start;
  padding: 18px 0 11px;
`;

export const StockSold = styled.span`
  float: left;
  color: #333e48;
`;

export const StockAvailable = styled.span`
  float: right;
  color: #333e48;
`;

export const Progress = styled.div`
  background-color: #eee;
  height: 20px;
  margin: 0;
  box-shadow: 0 0 0 #ffff;
  border-radius: 10px 10px 10px 10px;
  display: flex;
`;
export const ProgressBar = styled.span`
  width: ${(props) => props.value}%;
  height: 100%;
  background-color: #fed700;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  transition: width 0.6s ease;
  box-shadow: 0 0 0 #ffff;
  border-radius: 10px 10px 10px 10px;
`;

export const SpecialPriceCompare = styled(PriceCompare)`
  font-size: 16px;
`;

export const SpecialPriceSale = styled(PriceSale)`
  float: none;
  font-size: 30px;
`;
