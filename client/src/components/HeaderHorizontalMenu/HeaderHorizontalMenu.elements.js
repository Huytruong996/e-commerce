import { Link } from "react-router-dom";
import styled from "styled-components";
import { Breakpoint } from "../../globalStyles";
export const HeaderHorizontalMenuWrapper = styled.div`
  position: relative;
  @media (min-width: ${Breakpoint.Tablet}) {
    width: 75.7%;
    display: table-cell;
    vertical-align: middle;
    padding-inline-start: 15px;
  }
`;

export const HeaderHorizontalContent = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 10px 0;
`;

export const UlHorizontalMenu = styled.ul`
  width: 100%;
  position: static;
  margin: 0 auto;
`;

export const ItemMenu = styled(Link)`
  padding: 13px 0;
`;

export const ItemMenuHasChildren = styled(ItemMenu)`
  position: relative;
  :before {
    content: "";
    position: absolute;
    bottom: -9px;
    width: 100%;
    height: 25px;
    left: 0px;
  }
  :after {
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-left: 5px;
  }
`;

export const TitleMenuHasChildren = styled.span`
  position: relative;
  :before {
    content: "";
    border-color: transparent;
    border-width: 6px 5px;
    border-style: solid;
    border-bottom-color: #f03333;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    bottom: -3px;
    left: calc(50% - 14px);
    transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  }
`;
export const ItemSubMenu = styled.div``;

export const SubMenu = styled.div`
  width: 100%;
  min-height: 190px;
  padding: 20px 20px 0;
  margin: 0;
  top: auto;
  left: 0;
  position: absolute;
  display: block;
  border: 1px solid #dddddd;
  border-top: 2px solid #f03333;
  background: #ffff;
  visibility: hidden;
  opacity: 0;
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  min-width: 10rem;
  border-radius: 0 0 6px 6px;
  color: #212529;
  list-style: none;
  z-index: 9999;
`;
export const UlSubMenu = styled.ul`
  margin: 0;
  font-size: 14px;
  background: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  position: static;
  width: 100%;
  min-width: auto;
  padding-top: 0;
  visibility: inherit;
  opacity: inherit;
  padding: 5px 0;
  left: 0;
  top: 100%;
  display: block;
  float: none;
  text-align: start;
  z-index: -99;
  color: #212529;
  padding-inline-start: 10px;
`;
export const LiSubMenu = styled.li`
  border: none;
  padding: 0;
  position: relative;
`;

export const ItemSubMenuLink = styled(Link)`
  display: block;
  color: #333e48;
  white-space: inherit;
  border: none;
  line-height: 20px;
  transition: all 0s;
  padding: 5px 0;
`;

export const ItemSubMenuCategory = styled(Link)`
  font-size: 16px;
  position: relative;
  display: block;
  padding: 0 0 6px;
  margin: 0 0 5px;
  line-height: 24px;
  font-weight: 700;
  color: #333e48;
`;

export const SubMenuContent = styled.div`
  position: relative;
`;
export const LiHorizontalMenu = styled.li`
  float: left;
  display: table;
  line-height: 24px;
  padding: 0 15px;
  text-transform: uppercase;
  :hover ${SubMenu} {
    opacity: 1 !important;
    visibility: visible !important;
    transform: translateY(13px) !important;
  }
  :hover ${TitleMenuHasChildren} {
    :before {
      bottom: -17px !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
  }
`;
