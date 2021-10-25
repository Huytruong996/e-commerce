import styled, { css } from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export const HeaderVerticalMenuWrapper = styled.div``;
export const CategoriesVerticalMenu = styled.div`
  min-width: 280px;
  position: relative;
  margin-right: 20px;
`;

export const CategoriesTitle = styled.h3`
  line-height: 55px;
  border-radius: 10px 10px 10px 10px;
  ${(props) =>
    props.Home &&
    css`
      border-radius: 6px 6px 0 0;
    `}
  position: relative;
  background: #fed700;
  color: #333e48;
  font-size: 14px;
  margin: 0;
  padding: 0 30px;
  font-weight: 700;
  display: flex;
  &:after {
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-left: 9px;
    font-size: 16px;
    display: inline-block;
    position: relative;
  }
`;

export const IconBar = styled.i`
  width: 13px;
  height: 2px;
  background: #333e48;
  display: inline-block;
  position: relative;
  margin: 26px 35px 0 0;
  &:before {
    content: "";
    width: 22px;
    height: 2px;
    background: #333e48;
    display: inline-block;
    top: -6px;
    position: absolute;
  }
  &:after {
    content: "";
    width: 29px;
    height: 2px;
    background: #333e48;
    position: absolute;
    display: inline-block;
    bottom: -6px;
  }
`;

export const VerticalMenu = styled.div`
  position: absolute;
  background: #fff;
  z-index: 9999;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  display: none;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 0 10px 1px hsl(0deg 0% 56% / 10%);
  transition: all 0.35s ease 0s;
  ${(props) =>
    props.Home &&
    css`
      opacity: 1;
      visibility: visible;
      display: block;
    `}
  ${(props) =>
    props.isSticky
      ? css`
          opacity: 0.001 !important;
          visibility: hidden !important;
        `
      : ``}
`;
export const UlVerticalMenu = styled.ul``;

export const LiVerticalMenu = styled.li`
  padding: 0 30px;
  position: unset !important;
  > a {
    padding: 8.5px 0;
    display: inline-block;
    border-bottom: 1px solid #e9e9e9;
    width: 100%;
    font-size: 13px;
    text-transform: capitalize;
    color: #636363;
    &:before {
      content: "";
      position: relative;
      display: inline-block;
      background: #d6d6d6;
      border-radius: 50%;
      width: 6px;
      height: 6px;
      margin-right: 15px;
    }
  }
  :first-child > a:before {
    background: #4d83fe;
  }
  :nth-child(2) > a:before {
    background: #5fca51;
  }
  :nth-child(3) > a:before {
    background: #c557c2;
  }
  :last-child > a {
    border-bottom: none;
  }
`;

export const ItemlMenu = styled(Link)`
  color: #000;
  font-weight: 500;
`;

export const SubMenu = styled.div`
  position: absolute;
  top: 0;
  width: 710px;
  min-width: 225px;
  padding: 0;
  @media (max-width: 1199px) and (min-width: 992px) {
    width: 600px;
  }
  opacity: 0;
  visibility: hidden;
  left: calc(100% + 30px);
  transition: all 0.3s ease;
`;

export const LiVerticalMenuHasChildren = styled(LiVerticalMenu)`
  > a:after {
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    opacity: 1;
    right: 24px;
    display: inline-block;
    width: auto;
    font-size: 18px;
    height: auto;
    color: rgba(99, 99, 99, 0.5);
    position: absolute;
    transform: rotate(-91deg);
  }
  :hover ${SubMenu} {
    opacity: 1;
    visibility: visible;
    left: 100%;
    background: #ffff;
  }
`;

export const ElementorWrap = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 0 10px 10px;
`;

export const ElementorSection = styled.section`
  border-width: 2px 0 0;
  border-color: #f03333;
  border-style: solid;
  border-radius: 0 0 10px 10px;
  box-shadow: 5px 0px 32px 0px rgb(0 0 0 / 9%);
  padding: 17px 15px 70px;
  min-height: 330px;
`;

export const ElementorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ElementorColumn = styled.div`
  position: relative;
  width: 36.333%;
`;

export const ElementorTitle = styled.h2`
  font-weight: 900;
`;
export const ElementorListItem = styled.div`
  margin: 20px 0;
`;
export const UlListItem = styled.ul``;
export const LiListItem = styled.li`
  :not(:first-child) {
    margin-top: calc(5px / 2);
  }
  :not(:last-child) {
    padding: 3px 0;
  }
`;
