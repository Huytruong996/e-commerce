import styled from "styled-components";

export const SuggestProductWrap = styled.div`
  margin-top: 20px;
`;

export const SuggestHeader = styled.div`
  padding-top: 1.25rem;
  display: flex;
  align-items: center;
`;

export const SuggestTitle = styled.div`
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 500;
  text-transform: uppercase;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 1.25rem;
`;

export const SuggestMore = styled.a`
  text-decoration: none !important;

  display: block;
  button {
    display: flex;
    text-transform: capitalize;
    align-items: center;
    padding: 0.3125rem 0.4375rem;
    color: #ee4d2d;
    background-color: transparent;
    border: 0;
    svg {
      display: inline-block;
      width: 1em;
      height: 1em;
      fill: currentColor;
      position: relative;
      font-size: 0.625rem;
    }
  }
`;

export const SuggestContent = styled.div`
  padding-top: 0.3125rem;
  :hover {
    .swiper-button-next,
    .swiper-button-prev {
      width: 50px;
      height: 50px;
    }
  }
  .swiper-wrapper {
    overflow: hidden;
    padding-bottom: 35px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    box-shadow: 0 1px 12px 0 rgb(0 0 0 / 12%);
    cursor: pointer;
    border-radius: 50%;
    background-color: #fff;
    margin-top: -25px;
    transition: all 0.1s cubic-bezier(0.4, 0, 0.6, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0;
    width: 25px;
    height: 25px;
    line-height: 25px;
    margin-top: -12.5px;
    background-color: #fff;
    :after {
      font-size: 0.8rem;
      color: rgba(0, 0, 0, 0.54);
    }
  }
  .swiper-button-disabled {
    opacity: 0;
  }
`;
