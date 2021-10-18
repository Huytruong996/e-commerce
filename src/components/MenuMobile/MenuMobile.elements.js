import styled, { css } from "styled-components";

export const MenuMobileWrapper = styled.div`
  width: 100%;
`;

export const MenuMobileNavbar = styled.div`
  display: block;
  top: 0 !important;
  left: 0;
  bottom: 0;
  position: fixed;
  width: 300px;
  z-index: 999999;
  background: #fff;
  padding: 0;
  ${(props) =>
    props.opened
      ? css`
          transform: translateZ(0);
        `
      : css`
          transform: translate3d(-300px, 0, 0);
        `}

  transition: all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

export const MenuMobileContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MenuMobileCollapse = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DropMenu = styled.div`
  clear: both;
  padding: 0;
  float: none;
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100% !important;
  min-height: calc(100vh - 60px) !important;
  max-height: calc(100vh - 60px);
  background: #fff !important;
  z-index: 9991;
  visibility: inherit;
  opacity: inherit;
  position: absolute;
  left: 0;
  top: 0;

  transition: transform 0.4s ease, visibility 0.3s linear, opacity 0.3s linear;
  box-shadow: 0 0 0 #fff;
  > div:not(:last-child) {
    border-bottom: 1px solid #dddddd;
  }
  ${(props) =>
    props.openSub
      ? css`
          transform: translateZ(0);
        `
      : css`
          transform: translate3d(300px, 0, 0);
        `}
`;

export const Main = styled.ul`
  position: relative;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    border-radius: 25px 25px 25px 25px;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #eee;
    border-radius: 25px 25px 25px 25px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fed700;
    border-radius: 25px 25px 25px 25px;
  }
  li {
    display: block;
    a {
      padding: 10px 20px;
      display: block;
      line-height: 26px;
      color: #000000;
      font-size: 16px;
      position: relative;
    }
  }

  li:not(:last-child) {
    border-bottom: 1px solid #dddddd;
  }
  ${(props) =>
    props.active
      ? css`
          > li:not(.active) {
            display: none;
          }
        `
      : ""}
`;

export const ContactBar = styled.ul`
  margin-top: auto;
  background: #fed700;
  max-height: 52px;
  display: table;
  width: 100%;
  table-layout: fixed;
  padding: 5px 0;
`;

export const ContactBarItem = styled.li`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 0;
  margin: 0;
  a {
    color: #333e48;
    display: block;
    position: relative;
    font-weight: 600;
    font-size: 12px;
  }
  svg {
    display: block;
    margin: 0 auto 2px;
  }
`;

export const ContactBarInfo = styled.div`
  position: fixed;
  bottom: 55px;
  left: 0;
  right: 0;
  border-top: 1px solid #dddddd;
  padding: 35px 20px 15px;
  font-weight: 600;
  color: #333e48;
  background: #ffffff;
  z-index: 9999;
  transform: translateY(147%);
  transition: all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  p {
    margin: 0 0 15px;
    line-height: 22px;
  }
  opacity: 0;
  ${(props) =>
    props.showContactBar &&
    css`
      opacity: 1;
      transform: translate(0);
    `}
`;

export const ContactInfoCLose = styled.span`
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 20px;
`;

export const MenuBar = styled.li`
  background: #fed700;
`;

export const Item = styled.li``;

export const ItemHasChildren = styled.li`
  position: static;
`;

export const DropInner = styled.div`
  position: relative;
`;

export const DropMenuSub = styled.ul`
  clear: both;
  padding: 0;
  float: none;
  border: none;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100% !important;
  min-height: calc(100vh - 60px) !important;
  max-height: calc(100vh - 60px);
  background: #fff !important;
  z-index: 9991;
  visibility: inherit;
  opacity: inherit;
  position: absolute;
  left: 0;
  top: 0;
  transition: transform 0.4s ease, visibility 0.3s linear, opacity 0.3s linear;
  box-shadow: 0 0 0 #fff;
  ${(props) =>
    props.openSub
      ? css`
          transform: translateZ(0);
        `
      : css`
          transform: translate3d(300px, 0, 0);
        `}
`;

export const ExpandIcon = styled.span`
  z-index: 5;
  width: 100%;
  height: 46px;
  line-height: 46px;
  padding: 0 15px;
  font-size: 14px;
  cursor: pointer;
  color: #000000;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BackPrevMenu = styled.div`
  text-align: center;
  padding: 0;
  text-transform: uppercase;
  color: #333e48;
  background: #fed700;
`;

export const ExpandBack = styled(ExpandIcon)`
  display: flex;
  position: static;
  height: auto;
  line-height: 22px;
  padding: 13px 12px;
  justify-content: flex-start;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
    margin-inline-end: 8px;
  }
`;

export const BlockIcon = styled.ul`
  position: static;
  border-top: 1px solid rgba(51, 62, 72, 0.1);
  left: 0;
  bottom: 0;
  z-index: 9999;
  max-height: 52px;
  background: #fed700;
  display: table;
  width: 100%;
  table-layout: fixed;
  padding-left: 0;
  li {
    display: table-cell !important;
    vertical-align: middle;
    text-align: center;
    border-inline-end: 1px solid rgba(51, 62, 72, 0.1);
    padding: 0;
    margin: 0;
    a {
    }
  }
`;

export const AccountIcon = styled.li``;
export const CompareIcon = styled.li``;
export const WishlistIcon = styled.li``;
export const LanguageIcon = styled.li``;
export const NumberCount = styled.span`
  position: absolute;
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  border-radius: 50% 50% 50% 50%;
  background: #333e48;
  color: #ffffff;
  top: auto;
  right: auto;
  left: 50%;
  bottom: 12px;
  margin-inline-start: 12px;
  transform: translate(-50%);
`;
export const FlagLanguage = styled.i`
  cursor: pointer;
  margin: 0 auto;
  background-image: url(${require("../../images/laguages_flag.png").default});
  background-size: auto 24px;
  border-radius: 0;
  width: 24px;
  height: 24px;
  display: block;
  background-position: -2520px 0;
`;
