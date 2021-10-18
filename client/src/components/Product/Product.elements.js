import { Link } from "react-router-dom";
import styled from "styled-components";
import { Breakpoint } from "../../globalStyles";

export const ProductVendor = styled.div`
  margin: 0 0 7px;
  line-height: 20px;
  color: #878787;
  font-size: 12px;
  a:hover {
    color: #fed700;
  }
`;

export const ProductGroupName = styled.div``;

export const ProductHeader = styled.div`
  overflow: hidden;
  display: block;
  position: relative;
  text-align: center;
  width: 100%;
  margin: 0 auto 10px;
`;

export const ProductImageSide = styled.span`
  position: relative;
  padding-top: 91.66666666666667%;
  display: block;
`;

export const ProductLabel = styled.span`
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 700;
  z-index: 3;
  position: absolute;
  left: 0;
  top: 10px;
`;

export const LabelSale = styled.span`
  color: #343f49;
  background-color: #fed700;
  display: block;
  clear: both;
  text-align: center;
  padding: 0;
  margin: 0 0 10px;
  border: none;
  z-index: 1;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 50% 50% 50% 50%;
`;

export const PriceCartWrapper = styled.div`
  position: relative;
  padding: 0;
  min-height: auto;
  border-bottom: 1px solid transparent;
  justify-content: space-between;
  align-items: center;
  display: flex;
  @media (min-width: ${Breakpoint.Desktop}) {
    padding-bottom: 9px;
    min-height: 42px;
  }
`;

export const ProductContent = styled.div`
  display: block;
  width: 100%;
`;

export const ProductGotoDetail = styled.div`
  display: block;
`;

export const PathGoto = styled.path`
  fill: #ffff;
`;

export const LinkGoto = styled(Link)`
  text-align: center;
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 50% 50% 50% 50%;
  -moz-border-radius: 50% 50% 50% 50%;
  -webkit-border-radius: 50% 50% 50% 50%;
  -ms-border-radius: 50% 50% 50% 50%;
  line-height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fed700;
  color: #ffff;
  border: 1px solid #fed700;
  @media (max-width: 991px) {
    display: none;
  }
  @media (min-width: ${Breakpoint.Desktop}) {
    background: #e6e6e6;
    color: #ffff;
    border-color: #e6e6e6;
  }

  :hover {
    @media (min-width: ${Breakpoint.Desktop}) {
      background: #fed700;
      color: #ffff;
      border-color: #fed700;
    }
  }
`;

export const ProductButton = styled.div`
  display: none;
  border: none;
  position: static;
  padding: 0;
  background: transparent;
  text-align: start;
  width: auto;
  z-index: -1;
  white-space: nowrap;
  opacity: 1;
  transform: translate(0);
  transition: all 0.35s ease 0s;
  border-radius: 0 0 5px 5px;
  > div {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  @media (min-width: ${Breakpoint.Desktop}) {
    background: var(--body-background-color);
    border: 1px solid var(--body-border-color);
    border-top: none;
    padding: 0 15px 8px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -32px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateY(20px);
    @media (min-width: 1200px) {
      > div {
        max-width: 50%;
        padding: 0 4px;
        > span {
          display: block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          flex: 1;
        }
      }
    }
  }
`;

export const LinkProductImage = styled(Link)`
  :before {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.2);
    content: "";
    width: 100%;
    height: 0;
    z-index: 1;
    transition: all 0.35s ease-in-out 0s;
  }
`;

export const ProductWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 10px;
  background: #ffff;
  height: 100%;
  transition: all 0.35s ease 0s;
  @media (min-width: 480px) {
    padding: 15px;
  }
  @media (min-width: ${Breakpoint.Desktop}) {
    padding: 15px 20px;
  }
  :after {
    content: "";
    width: 100%;
    z-index: -1;
    border: 1px solid #dddddd;
    background: #ffffff;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: -32px;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0 0 5px 0 #c6c6c6;
    transition: all 0.35s ease 0s;
    transform: rotateX(45deg);
    transform-origin: bottom;
    opacity: 0;
  }
  :hover {
    z-index: 5;
    background: #ffff;
    @media (min-width: 1025px) {
      ${LinkProductImage} {
        :before {
          width: 100%;
          height: 100%;
        }
      }
    }
    @media (min-width: ${Breakpoint.Desktop}) {
      :after {
        transform: rotateX(0);
        opacity: 1;
      }
      ${ProductButton} {
        opacity: 1;
        transform: translate(0);
        z-index: 20;
      }
      ${PriceCartWrapper} {
        border-color: #dddddd;
      }
    }
  }
`;
export const PathQuickShop = styled.path`
  fill: #878787;
`;

export const QuickShop = styled.div`
  cursor: pointer;
  color: #878787;
  font-size: 13px;
  line-height: 28px;
  transition: all 0.35s ease 0s;
  svg {
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
  }
  :hover {
    color: #fed700;
    ${PathQuickShop} {
      fill: #fed700;
    }
  }
`;

export const LinkWishList = styled(Link)`
  color: #878787;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  align-items: center;
  overflow: hidden;
  svg {
    margin-right: 5px;
    float: left;
  }
`;

export const PathWishList = styled.path`
  fill: #878787;
`;

export const ProductWishList = styled.div`
  :hover {
    ${LinkWishList} {
      color: #fed700;
    }

    ${PathWishList} {
      fill: #fed700;
    }
  }
`;

export const PriceCompare = styled.span`
  text-decoration: line-through;
  color: #848484;
  white-space: nowrap;
  font-size: 12px;
  display: inline;
`;

export const PriceSale = styled.span`
  color: #ee0000;
  font-size: 17px;
  float: left;
  white-space: nowrap;
  margin-right: 8px;
  @media (min-width: 480px) {
    font-size: 20px;
  }
`;

export const ProductImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
export const ProductImageWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0;
`;

export const ProductName = styled.h5`
  color: #0062bd;
  font-size: 12px;
  margin: 0 0 7px;
  line-height: 1.4;
  position: relative;
  font-weight: 700;
  margin: 0 0 12px;
  @media (min-width: 480px) {
    font-size: 14px;
  }
  :hover {
    a {
      color: #fed700;
    }
  }
  a {
    color: inherit;
    font-size: inherit;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const ProductPrice = styled.div`
  line-height: 1.0855;
  padding: 0 0 1px;
  padding-right: 5px;
  color: #343f49;
  font-size: 17px;
  padding: 0;
  @media (min-width: 480px) {
    font-size: 20px;
  }
`;
