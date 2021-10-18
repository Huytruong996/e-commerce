import styled, { css } from "styled-components";
import { Breakpoint, Container } from "../../globalStyles";

export const FooterHomeWrap = styled.footer`
  margin-top: 0;
`;

export const FooterContent = styled.div``;

export const NewLetterContent = styled.div`
  width: 100%;
  margin: 0 auto -33px;
  position: relative;

  @media (min-width: ${Breakpoint.SmallMobile}) {
    max-width: 100%;
  }
  @media (min-width: ${Breakpoint.Mobile}) {
    max-width: 760px;
  }
  @media (min-width: ${Breakpoint.Tablet}) {
    max-width: 980px;
  }
  @media (min-width: ${Breakpoint.Desktop}) {
    max-width: 1200px;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const FooterWidget = styled.div`
  background: #f8f8f8;
  @media (min-width: ${Breakpoint.Mobile}) {
    padding-top: 33px;
  }
`;
export const FooterBottom = styled.div`
  padding-top: 12px;
  padding-bottom: 4px;
  background: #eaeaea;
`;

export const NewLetter = styled.div`
  background: #fed700;
  padding: 15px 0;
  border-radius: 10px 10px 10px 10px;
`;

export const NewLetterContainer = styled.div`
  @media (min-width: ${Breakpoint.Mobile}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    @media (max-width: 1199px) {
      display: none;
    }
    text-transform: none;
    margin: 0;
    line-height: 26px;
    padding: 8px 0 6px;
    padding-inline-end: 20px;
    color: #333e48;
    span {
      font-weight: 700;
    }
  }
`;

export const NewLetterTitle = styled.div`
  font-size: 22px;
  line-height: 30px;
  align-items: center;
  padding: 6px 0 15px;
  display: flex;
  @media (min-width: ${Breakpoint.Desktop}) {
    min-width: 25%;
  }

  @media (min-width: ${Breakpoint.Mobile}) {
    padding-bottom: 4px;
    -webkit-padding-end: 20px;
    padding-inline-end: 20px;
  }
  svg,
  span {
    color: #333e48;
  }
`;

export const SvgLetter = styled.svg`
  width: 30px;
  height: 30px;
  margin-inline-end: 5px;
`;

export const SubscribeForm = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 40%;
  margin: 0;
  position: relative;
  float: right;
  @media (max-width: 767px) {
    float: none;
    width: 100%;
    display: block;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    width: 50%;
  }
`;

export const InputEmail = styled.input`
  color: #797979;
  height: 42px;
  display: inline-block;
  vertical-align: middle;
  border: none;
  line-height: 20px;
  width: 100%;
  margin: 0 0 15px;
  padding: 11px 15px;
  padding-inline-end: 50px;
  padding-inline-start: 30px;
  border-radius: 25px 25px 25px 25px;
  font-size: 14px;
  background: #ffff;
  @media (min-width: ${Breakpoint.SmallMobile}) {
    width: 85%;
    margin: 0;
    padding: 11px 30px;
  }
`;

export const ButtonEmailSubmit = styled.button`
  height: 42px;
  padding: 6px 35px;
  line-height: 30px;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  background: #333e48;
  color: #ffffff;
  border: 1px solid #333e48;
  position: static;
  width: 100%;
  border-radius: 25px 25px 25px 25px;
  transition: all 0.35s ease-in-out 0s;

  @media (min-width: ${Breakpoint.SmallMobile}) {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    border-radius: 0 25px 25px 0;
  }
  :hover {
    background: #000000;
    border-color: #000000;
    color: #ffffff;
  }
`;

export const FooterInner = styled(Container)`
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 15px;
  @media (min-width: ${Breakpoint.Mobile}) {
    padding-top: 58px;
    padding-bottom: 32px;
  }
`;

export const FooterLogo = styled.div`
  margin: 0 0 20px;
  @media (min-width: ${Breakpoint.Mobile}) {
    margin-bottom: 30px;
  }
`;

export const FooterMenu = styled.div`
  margin: 0 0 20px;
  @media (min-width: ${Breakpoint.Mobile}) {
    margin-bottom: 30px;
  }
`;

export const TitleMenu = styled.h6`
  color: #333e48;
  font-size: 18px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.1;
  font-weight: 600;
  @media (min-width: ${Breakpoint.SmallMobile}) {
    ${(props) =>
      props.hidden &&
      css`
        opacity: 0;
        visibility: hidden;
      `}
  }
`;

export const ListUl = styled.ul`
  margin: 20px 0 0;
  display: none;
  @media (min-width: ${Breakpoint.SmallMobile}) {
    display: block;
  }
  @media (min-width: ${Breakpoint.Mobile}) {
    margin-top: 28px;
  }
`;

export const ListLi = styled.li`
  display: block;
  margin: 0 0 12px;
  color: #333e48;
  a {
    :hover {
      color: #df3737;
      font-weight: 700;
    }
  }
`;

export const Logo = styled.div``;

export const SupportBox1 = styled.div`
  margin: 20px 0 0;
  display: flex;
  align-items: center;
  width: 100%;
  svg {
    padding-inline-end: 20px;
    flex: 0 0 66px;
    path {
      fill: #fed700;
    }
  }
  @media (min-width: ${Breakpoint.SmallMobile}) {
    margin-top: 40px;
  }
`;

export const BoxText1 = styled.div`
  color: #333e48;
  padding: 0;
  span:first-child {
    font-weight: 300;
    display: block;
    font-size: 13px;
  }
  span:last-child {
    display: block;
    font-size: 20px;
  }
`;

export const SupportBox2 = styled.div`
  padding: 20px 0 0;
`;

export const BoxText2 = styled.div`
  color: #333e48;
  span:first-child {
    display: block;
    font-weight: 700;
    padding: 0 0 3px;
  }
`;
export const WidgetSocial = styled.div`
  margin: 20px 0 0;
  text-align: center;
  @media (min-width: ${Breakpoint.SmallMobile}) {
    margin-top: 34px;
    text-align: start;
  }
`;

export const WidgetUl = styled.ul`
  li:first-child {
    margin-inline-start: 0;
  }
`;

export const WidgetLi = styled.li`
  display: inline-block;
  margin: 0;
  margin-inline-start: 20px;
  a {
    color: #333e48;
    display: block;
    line-height: 32px;
    :hover {
      color: #fed700;
      svg > path {
        fill: #fed700;
      }
    }
  }
`;

export const TableRow = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  @media (min-width: ${Breakpoint.Mobile}) {
    display: table;
    > div {
      display: table-cell;
      vertical-align: middle;
    }
  }
`;

export const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 0 10px;
  @media (min-width: ${Breakpoint.Mobile}) {
    width: 50%;
    text-align: start;
    padding: 0;
  }
`;

export const PaymentIcon = styled.div`
  width: 100%;
  text-align: center;
  @media (min-width: ${Breakpoint.Mobile}) {
    text-align: end;
    width: 50%;
  }
`;
