import React from "react";
import styled from "styled-components";
import { Breakpoint, Container } from "../../globalStyles";

export const HeaderMenuContainer = styled(Container)`
  display: none;
  @media (min-width: ${Breakpoint.Tablet}) {
    display: block;
  }
`;

export const HeaderMenuLeftWrapper = styled.div`
  @media (min-width: ${Breakpoint.Tablet}) {
    position: relative;
    display: table;
    width: 100%;
  }
`;

export const HeaderMenuRightWrapper = styled.div`
  display: none;
  @media (min-width: ${Breakpoint.Desktop}) {
    font-size: 13px;
    color: #333e48;
    float: right;
    line-height: 25px;
    padding: 10px 0;
    display: block;
  }
`;
