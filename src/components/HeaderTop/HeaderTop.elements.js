import styled, { css, keyframes } from "styled-components";
import { Breakpoint, Container, Row } from "../../globalStyles";

const hvrIconBob = keyframes`
0%{
  transform:translateY(-8px)
}
to{
  transform:translateY(0)
}
`;

const hvrIconBobFloat = keyframes`
to{transform:translateY(-8px)}
`;

const fadeInDown = keyframes`
0%{opacity:0;transform:translateY(-20px)}
to{opacity:1;transform:translateY(0)}
`;

export const HeaderTopRow = styled(Row)`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  @media (min-width: ${Breakpoint.Tablet}) {
    align-items: center;
    padding: 25px 0 17px;
  }
`;

export const HeaderWrapTop = styled.div`
  animation-duration: 0.5s;
  animation-fill-mode: both;
  background: #fed700;
  box-shadow: 0 0 8px rgb(201 201 201 / 75%);
  @media (max-width: 991px) {
    padding: 19px 0 !important;
    margin: 0 auto;
  }
  @media (min-width: ${Breakpoint.Tablet}) {
    background: transparent;
    box-shadow: none;
  }
  ${(props) =>
    props.isSticky
      ? css`
          @media (max-width: 991px) {
            background: #fed700;
            z-index: 999;
            width: 100%;
            top: 0;
            left: 0;
            position: fixed;
            animation-name: ${fadeInDown};
            box-shadow: 0 0 15px rgb(0 0 0 / 65%);
          }
          @media (min-width: ${Breakpoint.Tablet}) {
            padding-top: 10px !important;
            padding-bottom: 10px !important;
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            width: 100%;
            max-width: 100%;
            z-index: 999;
            background: #ffffff;
            animation-name: ${fadeInDown};
            box-shadow: 0 0 15px rgb(0 0 0 / 65%);
            ${HeaderTopRow} {
              padding: 0px;
            }
          }
        `
      : ``}
`;

export const HeaderTopContainer = styled(Container)``;

export const HeaderTopLeft = styled.div`
  display: block;
  text-align: center;
  margin-inline-end: auto;
`;

export const HeaderTopCenter = styled.div`
  display: none;
  @media (min-width: ${Breakpoint.Tablet}) {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    display: block;
  }
`;

export const HeaderTopRight = styled.div`
  display: none;
  @media (min-width: ${Breakpoint.Tablet}) {
    flex: 0 0 25%;
    max-width: 25%;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    display: block;
  }
`;

export const HeaderTopLogo = styled.div`
  @media (min-width: ${Breakpoint.Tablet}) {
    margin-top: -26px;
    display: inline-block;
    vertical-align: middle;
  }
`;

export const IMGLogo = styled.img`
  max-height: 22px;
  width: auto;
`;

export const HeaderTopSearchForm = styled.form`
  width: 100%;
  border: 2px solid #fed700;
  border-radius: 30px;
  height: 50px;
  position: relative;
  display: flex;
`;

export const SearchBox = styled.div`
  flex: 1;
  text-align: left;
  cursor: pointer;
`;

export const InputSearch = styled.input`
  padding: 0;
  padding-left: 20px;
  border: 0;
  width: 100%;
  line-height: 48px;
  font-size: 13px;
`;

export const SelectCategory = styled.div`
  position: relative;
  line-height: 46px;
  padding: 0 20px;
  font-size: 13px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    height: 28px;
    width: 1px;
    left: 0;
    top: calc(50% - 14px);
    background: #e1e1e1;
  }
`;

export const DropDownToggle = styled.span`
  &:hover {
    color: #f03333;
  }
`;
export const Caret = styled.span`
  font-size: 18px;
  color: #949494;
  top: 3px;
  position: relative;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  display: inline-block;
  padding: 0 5px;
  line-height: 1;
  &::before {
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
`;

export const SearchSubmit = styled.button`
  position: relative;
  font-size: 0;
  border-radius: 0 25px 25px 0;
  color: #fff;
  height: 49px;
  top: -2px;
  min-width: 40px;
  width: 40px;
  right: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  margin-left: 0;
  background: #000;
  @media (min-width: ${Breakpoint.Tablet}) {
    width: 61px;
    min-width: 61px;
    background: #fed700;
    color: #333e48;
  }
`;

export const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLink = styled.div`
  position: relative;
  margin-top: -26px;
  text-align: right;
  font-size: 23px;
  svg {
    fill: #3e454a;
  }
  * {
    &:first-child {
      margin-left: 0;
    }
    position: relative;
    display: inline-block;
    top: 2px;
    transition: all 0.3s ease;
    margin-left: 25px;
  }
  a:hover {
    span {
      animation-name: ${hvrIconBobFloat}, ${hvrIconBob};
      animation-duration: 0.3s, 0.75s;
      animation-delay: 0s, 0.3s;
      animation-timing-function: ease-out, ease-in-out;
      animation-fill-mode: forwards;
      animation-iteration-count: 1, infinite;
      animation-direction: normal, alternate;
    }
  }
  a:not(:first-child) {
    margin-inline-start: 15%;
  }
`;
export const Price = styled.span``;
export const Count = styled.span`
  position: absolute;
  top: 13px;
  border: solid 1px #fed700;
  border-radius: 50%;
  background: #fed700;
  color: #333e48;
  font-size: 12px;
  font-weight: 700;
  width: 22px;
  height: 22px;
  text-align: center;
  line-height: 22px;
  left: -7px;
`;

export const MostSearchWrapper = styled.div`
  font-size: 12px;
  margin-top: 5px;
  display: flex;
  label {
    color: #000;
    margin: 0 10px 0 0;
    white-space: nowrap;
  }
`;

export const MostSearchMenu = styled.ul``;
export const MostSeacrhItem = styled.li`
  display: inline-block;
  &:not(:last-child) {
    &:after {
      content: "";
      width: 1px;
      height: 11px;
      margin: 0 10px;
      background: #e7e7e7;
      position: relative;
      display: inline-block;
      top: 2px;
    }
  }
`;

export const NavBarResponsiveWrap = styled.div`
  display: none;
  @media (max-width: 991px) {
    font-size: 0;
    border: none;
    margin: 0;
    margin-inline-end: 20px;
    padding: 0 !important;
    cursor: pointer;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
  }
`;

export const MenuResponsive = styled.div`
  @media (max-width: 991px) {
    z-index: 9;
    cursor: pointer;
    font-size: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      height: 3px;
      background: #333e48;
      margin: 0 0 5px;
      display: block;
      width: 25px;
      border-radius: 3px 3px 3px 3px;
    }
  }
`;

export const SearchIconMobile = styled.div`
  svg {
    cursor: pointer;
  }
  @media (min-width: ${Breakpoint.Tablet}) {
    display: none;
  }
`;

export const CartIconMobile = styled.div`
  position: relative;
  margin-inline-start: 20px;
  a {
    display: block;
    max-height: 40px;
  }
  svg {
    cursor: pointer;
    margin: 0;
    margin-inline-end: 10px;
    width: 28px;
    height: 19px;
  }
  @media (min-width: ${Breakpoint.Tablet}) {
    display: none;
  }
  ${Count} {
    background: #333e48;
    color: #ffff;
    width: 21px;
    height: 21px;
    border: none;
    top: 8px;
    left: -23px;
  }
`;

export const NumberCart = styled.span`
  @media (max-width: 991px) {
    position: relative;
    font-weight: 700;
  }
  @media (max-width: 479px) {
    ${Price} {
      display: none;
    }
  }
`;
