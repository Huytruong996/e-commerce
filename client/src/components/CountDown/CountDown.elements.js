import styled from "styled-components";

export const CountDownWrapper = styled.div``;

export const OfferText = styled.span`
  display: block;
  font-size: 15px;
  color: #383838;
  padding: 17px 0 0;
  text-align: center;
`;

export const CountDown = styled.div`
  border: none;
  background: none;
  text-align: center;
  margin: 15px auto 0;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
`;

export const CountDownRow = styled.span`
  clear: both;
  width: 100%;
  padding: 0;
  text-align: center;
`;

export const CountDownSection = styled.span`
  width: auto;
  margin: 0 auto;
  padding: 0 7px;
  display: inline-block;
  position: relative;
  float: none;
  :first-child {
    padding-left: 0;
  }
  :not(:last-child) {
    :after {
      content: ":";
      color: #383838;
      font-size: 25px;
      font-weight: 600;
      line-height: 40px;
      height: 40px;
      position: absolute;
      top: 0;
      right: -4px;
    }
  }
`;

export const CountDownAmount = styled.span`
  font-size: 6.5vw;
  padding: 0 6px;
  line-height: 40px;
  float: none;
  margin: 0 auto;
  background: #e6e6e6;
  color: #383838;
  border-radius: 5px 5px 5px 5px;
  @media (min-width: 480px) {
    font-size: 30px;
    padding: 0 7px;
  }
`;

export const CountDownPeriod = styled.span`
  display: block;
  font-size: 12px;
  text-transform: uppercase;
  float: none;
  padding: 5px 0 0;
  color: #333e48;
  margin: 0 auto;
`;
