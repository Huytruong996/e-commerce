import styled, { css } from "styled-components";

export const CustomerLogin = styled.div`
  ${(props) =>
    props.isToggle
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;

export const RecoverPassword = styled.div`
  ${(props) =>
    props.isToggle
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

export const Action = styled.div`
  margin: 0 0 27px;
`;
