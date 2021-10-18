import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Breakpoint } from "../../globalStyles";
import {
  PriceCartWrapper,
  ProductImageSide,
} from "../Product/Product.elements";

export const BlockSPecialProduct = styled.div`
  height: 100%;
`;

export const SpecialProductHead = styled.div``;

export const SpecialProductImageWrap = styled.div`
  :before {
    content: "";
    display: block;
    padding-bottom: 0;
  }
`;

export const WrapThumbImage = styled.div`
  overflow: hidden;
  padding: 35px 0 15px;
`;
export const ThumbImage = styled.div`
  float: left;
  width: 58px;
  padding: 0;
  border: 1px solid #dddddd;
  position: relative;
  cursor: pointer;
  margin: 0 0 7px;
  margin-inline-end: 7px;
  :before {
    content: "";
    height: 2px;
    background: #fed700;
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    transition: all 0.35s ease-in-out;
  }
  :hover {
    :before {
      opacity: 1;
    }
  }
`;

export const ThumbImageSide = styled(ProductImageSide)`
  padding-top: 91.66666666666667%;
`;

export const SpecialProductIMGSide = styled(ProductImageSide)`
  padding-top: 91.66666666666667%;
`;

export const SpecialProductAdd = styled.div`
  display: block;
`;

export const LinkAdd = styled(Link)`
  line-height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  background: #fed700;
  color: #fff;
  font-weight: 600;
  width: 35px;
  height: 35px;
  border: 1px solid #fed700;
  border-radius: 25px 25px 25px 25px;
  :hover {
    background: #333e48;
    color: #fff;
    border-color: #333e48;
  }
  @media (min-width: 1400px) {
    width: auto;
    height: auto;
    padding: 0 16px;
  }
  svg {
    fill: #fff;
  }
  ${(props) =>
    props.disable &&
    css`
      cursor: not-allowed;
      svg:first-child {
        display: none;
      }
      ${IConLoadingAdd} {
        display: block;
        animation: fa-spin 2s linear infinite;
      }
    `}
`;
export const IConLoadingAdd = styled.svg`
  display: none;
`;

export const TextAdd = styled.span`
  display: none;
  margin-inline-start: 0;
  @media (min-width: 1400px) {
    display: initial;
    margin-inline-start: 8px;
  }
`;

export const PriceSpecialCartWrapper = styled(PriceCartWrapper)``;
