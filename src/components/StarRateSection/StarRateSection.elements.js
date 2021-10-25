import styled from "styled-components";

export const StarRates = styled.div`
  position: relative;
  display: inline-block;
`;

export const StarInner = styled.div`
  display: flex;
`;

export const StartWrap = styled.div`
  position: relative;
  margin-right: 1px;
  svg {
    color: #fed700;
    display: block;
    stroke: currentColor;
    width: 1em;
    height: 1em;
    fill: currentColor;
    position: relative;
  }
`;

export const StarContent = styled.div`
  overflow: hidden;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
  width: ${(props) => props.value};
`;
