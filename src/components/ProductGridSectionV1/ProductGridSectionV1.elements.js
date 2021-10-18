import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin: 0 auto 13px;
  padding: 0;
  border-bottom: 1px solid #dddddd;
  bottom: 26rem;
`;

export const Title = styled.h3`
  font-weight: 400;
  margin: 0;
  display: inline-block;
  position: relative;
  padding-bottom: 11px;
  line-height: 32px;

  :before {
    content: "";
    width: 100%;
    height: 2px;
    background: #fed700;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
  }
`;

export const ProductGridContent = styled.div`
  .swiper-wrapper {
    padding-bottom: 35px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    :after {
      font-size: 20px;
    }
  }
`;
