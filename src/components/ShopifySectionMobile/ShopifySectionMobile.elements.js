import styled from "styled-components";
import { Breakpoint, Container } from "../../globalStyles";

export const ShopifySectionMobileWrap = styled.div`
  margin: 0 auto;
  clear: both;
  display: block;
  width: 100%;
`;

export const Content = styled.div`
  @media (min-width: ${Breakpoint.Tablet}) {
    display: none;
  }
`;

export const SectionContainer = styled(Container)``;

export const UlListIcon = styled.ul`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar-track {
    border-radius: 25px 25px 25px 25px;
  }
  &::-webkit-scrollbar {
    height: 6px;
    background-color: #eee;
    border-radius: 25px 25px 25px 25px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fed700;
    border-radius: 25px 25px 25px 25px;
  }
  margin: 15px 0;

  li {
    list-style: none;
    text-align: center;
    flex: 0 0 auto;
    width: 25%;
    padding: 0 7.5px 15px;
  }
  a {
    svg {
      width: 40px;
      height: 40px;
    }
    span {
      display: block;
      padding-top: 5px;
    }
  }
  @media (min-width: ${Breakpoint.Mobile}) {
    li {
      width: 20%;
      padding: 0 15px 15px;

      span {
        display: block;
        clear: both;
        padding-top: 5px;
      }
    }
  }
`;
