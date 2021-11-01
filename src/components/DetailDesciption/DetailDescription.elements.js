import styled from "styled-components";
import { SectionContent } from "../../globalStyles";

export const DetailDescriptionWrap = styled(SectionContent)`
  background-color: #fff;
  width: 100%;
  margin-top: 12px;

  .limit {
    height: 768px;
    filter: none;
    &:after {
      content: "";
      height: 100px;
      position: absolute;
      bottom: 66px;
      width: 100%;
      left: 0;
      background: linear-gradient(-180deg, hsla(0, 0%, 100%, 0) 6%, #fff 83%);
    }
  }
  .blur-up.lazyloaded {
    filter: none;
  }
`;

export const ContentWrap = styled.div`
  height: auto;
  overflow-y: hidden;
  padding: 5px 14px 5px 24px;
  box-sizing: border-box;
`;

export const TitleContent = styled.h2`
  padding-left: 24px;
  padding-right: 24px;
  height: 52px;
  line-height: 52px;
  background: rgba(0, 0, 0, 0.02);
`;

export const ContentHighLight = styled.div`
  padding: 11px 0 16px;
  border-bottom: 1px solid #eff0f5;
  overflow: hidden;
  ul {
    overflow: hidden;
    column-count: 2;
    column-gap: 32px;
    @media (max-width: 992px) {
      column-count: 1;
    }
    li {
      position: relative;
      padding-left: 15px;
      font-size: 14px;
      line-height: 18px;
      text-align: left;
      list-style: none;
      word-break: break-word;
    }
    li:before {
      content: "•";
      position: absolute;
      left: 0px;
    }
  }
`;
export const ContentMain = styled.div`
  position: relative;
  height: auto;
  margin-top: 16px;
  padding-bottom: 16px;
  line-height: 1.3;
  border-bottom: 1px solid #eff0f5;
  div {
    max-width: 100%;
  }
`;
export const ContentSpecific = styled.div`
  margin-top: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eff0f5;
  font-size: 14px;
`;

export const TitleSpecific = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #212121;
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MainSpecific = styled.div``;

export const SpecificKeys = styled.ul`
  margin: 16px -15px 0;
  height: auto;
  box-sizing: border-box;
  font-size: 14px;
`;

export const Key = styled.li`
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
  padding: 0 15px;
  margin-bottom: 8px;
  vertical-align: top;
  line-height: 18px;
`;

export const TitleKey = styled.span`
  color: #757575;
  word-break: break-word;
  font-size: 14px;
  margin-right: 18px;
`;

export const ValueKey = styled.div`
  word-break: break-word;
`;

export const BoxSpecific = styled.div`
  margin-top: 28px;
  ${ValueKey} {
    display: inline-block;
    padding-left: 18px;
  }
`;

export const ExpandSection = styled.div`
  cursor: pointer;
  background: #fff;
  font-size: 13px;
  line-height: 14px;
  padding: 12px 0 18px;
  text-align: center;
  width: 100%;
  margin: 0 !important;
`;

export const ExpandButton = styled.button`
  display: inline-block;
  line-height: 36px;
  border: 1px solid #1a9cb7;
  background: #fff;
  color: #1a9cb7;
  height: 36px;
  font-size: 14px;
  padding: 0 24px;
  border-radius: 2px;
  transition: all 0.3s ease-out;
  outline: none;
  cursor: pointer;
  align-items: center;
  :hover {
    background: #1a9cb7;
    color: #fff;
    border: 1px solid #1a9cb7;
    border-radius: 3px;
  }
`;
