import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Breakpoint, Row } from "../../globalStyles";

export const NavTabWrapper = styled.div`
  margin: 0 auto 16px;
  position: relative;
`;

export const TabContent = styled.div`
  position: relative;
`;

export const NavTab = styled.ul`
  display: block;
  text-align: center;
  padding: 0 0 15px;
  position: static;
  transform: translate(0);
  left: 50%;
  top: -53px;
  white-space: nowrap;
  border-bottom: 1px solid #dddddd;
`;

export const NavItem = styled.li`
  float: none;
  display: inline-block;
  position: relative;
  border: none;
  margin: 0;
  margin-bottom: -1px;
  padding: 0;
`;

export const LinkItem = styled(Link)`
  line-height: 27px;
  margin: 0;
  padding: 1px 13px;
  font-weight: 400;
  position: relative;
  border: 2px solid transparent;
  border-radius: 13px 13px 13px 13px;
  background: none;
  color: #333e48;
  font-size: 15px;
  :hover {
    border-color: #fed700;
    color: #333e48;
  }
  @media (min-width: ${Breakpoint.Tablet}) {
    padding-inline-start: 19px;
    padding-inline-end: 19px;
  }
  ${(props) =>
    props.active &&
    css`
      border-color: #fed700;
    `}
`;

export const TabPanel = styled.div`
  :before,
  :after {
    content: "";
    display: block;
    width: 100%;
    clear: both;
  }
  visibility: hidden;
  width: 100%;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  transition: all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      position: static;
      visibility: visible;
    `}
`;

export const TabPanelWrapper = styled.div`
  clear: both;
`;

export const TabPanelRow = styled(Row)`
  margin: 0 -7.5px;
  transform: translateZ(0);
  @media (min-width: ${Breakpoint.Mobile}) {
    margin: 0 -2px;
  }
`;

export const TabProduct = styled.div`
  padding: 0;
`;

export const TabSpecial = styled.div`
  padding: 0 7.5px;
  margin-bottom: 4px;
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
  @media (min-width: ${Breakpoint.Mobile}) {
    padding: 0 2px;
  }
`;

export const BlockProductRow = styled(Row)`
  margin: 0;
`;

export const ProductItem = styled.div`
  margin: 0 0 30px;
  padding: 0 7.5px;
  margin-bottom: 15px;
  @media (min-width: ${Breakpoint.Mobile}) {
    padding: 0 2px;
    margin-bottom: 4px;
  }
`;
