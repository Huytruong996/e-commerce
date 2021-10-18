import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Breakpoint, Row } from "../../globalStyles";

export const WrappContent = styled.div``;

export const NavTabWrapper = styled.div`
  margin: 0 auto 6px;
`;

export const NavTabs = styled.ul`
  border: none;
  border-bottom: 1px solid #dddddd;
  text-align: center;

  @media (min-width: 768px) {
    margin-left: calc(50% + 15px);
  }

  @media (min-width: 992px) {
    position: static;
    display: block;
    transform: translate(0);
    margin-left: calc(41.66667% + 15px);
  }

  @media (min-width: 1200px) {
    margin-left: calc(33.33333% + 15px);
  }
`;

export const LinkItem = styled(Link)`
  font-size: 18px;
  margin: 0;
  padding: 0 0 9px;
  color: #333e48;
  display: block;
  position: relative;
  text-align: center;

  ::before {
    content: "";
    opacity: 0;
    position: absolute;
    left: 50%;
    transition: all 0.3s ease 0s;
    width: 0;
    height: 2px;
    z-index: 1;
    background-color: #fed700;
    right: 50%;
    bottom: -1px;
  }
  ::after {
    content: "";
    opacity: 0;
    position: absolute;
    left: 50%;
    transition: all 0.3s ease 0s;
    background-color: #fed700;
    height: 6px;
    width: 10px;
    bottom: -5px;
    transform: translate(-50%);
    border-radius: 0 0 10px 10px;
  }
  :hover {
    color: #333e48;
    :before {
      opacity: 1;
      left: 0;
      right: 0;
      width: 100%;
    }
    :after {
      opacity: 1;
      z-index: 1;
    }
  }
  ${(props) =>
    props.active
      ? css`
          font-weight: 600;
          ::before {
            opacity: 1;
            left: 0;
            right: 0;
            width: 100%;
          }
          ::after {
            opacity: 1;
            z-index: 1;
          }
        `
      : ""}
`;

export const NavItem = styled.li`
  @media (min-width: 992px) {
    padding: 0 13px;
  }
  padding: 0 10px;
  margin-bottom: -1px;
  float: none;
  display: inline-block;
  position: relative;
  border: none;
  margin: 0;
  &:first-child {
    padding-left: 0;
  }
`;

export const TabPanel = styled.div`
  width: 100%;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  display: block;
  transition: all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${(props) =>
    props.active
      ? css`
          opacity: 1;
          position: static;
          visibility: visible;
        `
      : ""}
`;

export const TabSpecialProduct = styled.div`
  @media (min-width: ${Breakpoint.Mobile}) {
    float: left;
    width: 45%;
    padding-right: 10px;
  }
  @media (min-width: ${Breakpoint.Tablet}) {
    width: 41.6666666667%;
  }
  @media (min-width: ${Breakpoint.Desktop}) {
    width: 33.33333333%;
  } ;
`;

export const TabListProduct = styled.div`
  clear: both;
  position: relative;
  @media (min-width: ${Breakpoint.Mobile}) {
    float: right;
    clear: none;
    width: 55%;
  }
  @media (min-width: ${Breakpoint.Tablet}) {
    width: 58.3333333333%;
  }
  @media (min-width: ${Breakpoint.Desktop}) {
    width: 66.66666667%;
  }
  .swiper-button-prev,
  .swiper-button-next,
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    background: #333e48;
    border-radius: 50% 50% 50% 50%;
    height: 25px;
    width: 25px;
    color: #ffff;
    opacity: 1;
    transition: all 0.1s cubic-bezier(0.4, 0, 0.6, 1);
    top: 46%;
    &:after {
      font-size: 10px;
    }
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: 0;
  }
  .swiper-pagination-bullet-active {
    background: #fed700;
    width: 30px;
    border-radius: 4px 4px 4px 4px;
  }

  .swiper-pagination-bullet {
    transition: all 0.3s ease 0s;
  }

  .swiper-container {
    margin-bottom: 20px;
    &:hover {
      .swiper-button-prev,
      .swiper-button-next {
        height: 50px;
        width: 50px;
      }
      .swiper-button-next {
        transform: translateX(calc(15% - 0px));
      }
      .swiper-button-prev {
        transform: translateX(calc(-15% + 0px));
      }
    }
  }
  .swiper-button-prev {
    transform: translateX(calc(-20% + 0px));
  }
  .swiper-button-next {
    transform: translateX(calc(20% - 0px));
  }
`;

export const ProductRow = styled(Row)`
  padding-bottom: 35px;
  padding-inline-start: 15px;
  padding-inline-end: 15px;
`;

export const ProductItem = styled.div`
  margin: 0;
  padding: 0;
`;
