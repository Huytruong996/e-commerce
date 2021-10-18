import styled from "styled-components";
import { Breakpoint, Container } from "../../globalStyles";
export const TopBarWrapper = styled.div`
  font-size: 12px;
  height: 45px;
  border-bottom: 1px solid #ebebeb;
  display: none;
  @media (min-width: ${Breakpoint.Tablet}) {
    display: block !important;
  }
`;

export const TopBarContainer = styled(Container)`
  display: flex;
`;

export const TopBarLeft = styled.div`
  flex-grow: 1;
  display: flex;
  line-height: 45px;
`;

export const Address = styled.div`
  flex-grow: 0;
`;

export const IconAddress = styled.i`
  font-size: 15px;
  color: #000;
  margin-right: 10px;
  top: 3px;
  position: relative;
  &:before {
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f3c5";
  }
`;

export const Email = styled.div`
  flex-grow: 1;
  position: relative;
  margin-left: 10px;
  padding-left: 15px;
  &:before {
    content: "";
    background: #d4d4d4;
    width: 1px;
    height: 18px;
    top: calc(50% - 9px);
    position: absolute;
    left: 0;
  }
`;

export const IconEmail = styled(IconAddress)`
  &:before {
    content: "\f0e0";
  }
`;

export const TopBarRight = styled(TopBarLeft)`
  justify-content: flex-end;
`;

export const Contact = styled.div`
  position: relative;
  padding-right: 15px;
  margin-right: 15px;
  &:before {
    position: absolute;
    content: "";
    right: 0;
    background: #d4d4d4;
    width: 1px;
    height: 18px;
    top: calc(50% - 9px);
  }
`;

export const TrackOrder = styled.div``;
