import styled from "styled-components";

export const AccountContentWrap = styled.div`
  padding: 30px 0 0;
  @media (max-width: 767px) {
    .col-xs-12 {
      max-width: 100%;
      flex: 0 0 100%;
    }
  }

  @media (min-width: 576px) {
    padding-bottom: 75px;
  }

  > div > div:last-child {
    position: relative;
    border-inline-start: 1px solid #dddddd;
    @media (max-width: 767px) {
      margin: 20px 0 0;
      border-inline-start: none;
      border-inline-end: none;
      padding-top: 50px;
    }
    :before {
      @media (max-width: 767px) {
        left: 50%;
        right: auto;
        top: 0;
        z-index: 2;
      }
      content: "or";
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-style: italic;
      border: 1px solid #e9e9e9;
      background: #ffff;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50% 50% 50% 50%;
    }
    @media (max-width: 767px) {
      :after {
        content: "";
        height: 1px;
        background: #dddddd;
        z-index: 1;
        position: absolute;
        left: calc(5% + 15px);
        top: 0;
        right: calc(5% + 15px);
      }
    }
  }
`;

export const FormWrapper = styled.div`
  padding: 0 5%;
  @media (min-width: 768px) {
    padding: 0 7%;
  }
  @media (min-width: 992px) {
    padding: 0 9.65%;
  }
`;
