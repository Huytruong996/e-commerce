import styled from "styled-components";

export const AccountContentWrap = styled.div`
  padding: 30px 0 0;

  @media (min-width: 576px) {
    padding-bottom: 75px;
  }

  > div > div:last-child {
    position: relative;
    border-inline-start: 1px solid #dddddd;
    :before {
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
