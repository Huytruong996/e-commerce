import styled, { css } from "styled-components";
import { Breakpoint } from "../../globalStyles";

export const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background: #ffff;
`;

export const ThumbImageContent = styled.div`
  width: 450px;
  padding: 15px;
  flex-shrink: 0;
`;

export const ThumbImageInner = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MainImage = styled.img`
  width: 100%;
  object-position: center center;
  filter: blur(0);
  border: none;
`;

export const SlideThumbs = styled.div`
  margin: 5px -5px;
  position: relative;
  .swiper-container {
    margin-bottom: unset;
  }
  .swiper-slide {
    padding: 5px;
  }
  .swiper-button-prev,
  .swiper-button-next {
    background-color: rgba(0, 0, 0, 0.2);
    width: 1.25rem;
    height: 2.5rem;
    :after {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
    }
  }
  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    opacity: unset;
  }
`;

export const ItemThumb = styled.div`
  position: relative;
  cursor: pointer;
`;

export const BorderThumb = styled.div`
  ${(props) =>
    props.active &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border: 2px solid #fed700;
    `}
`;

export const ImageThumb = styled.img``;

export const Content = styled.div`
  display: flex;
`;

export const ContentInner = styled.div`
  width: 100%;

  box-sizing: border-box;
  padding: 1.25rem 2.1875rem 0 1.25rem;
`;
export const ContentTitle = styled.div`
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  overflow: hidden;
  max-width: 42.5625rem;
  font-size: 1.25rem;
  word-wrap: break-word;
  vertical-align: sub;
  max-height: 3rem;
  line-height: 1.5rem;
`;
export const LikeLabel = styled.div`
  vertical-align: middle;
  display: inline-flex;
  margin-right: 10px;
  border-radius: 2px;
  position: relative;
  background-color: #fed700;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  padding: 0.1875rem 0.25rem;
  text-transform: capitalize;
  color: #fff;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1;
  white-space: nowrap;
  cursor: default;
  user-select: none;
`;
export const ContentRate = styled.div`
  margin-top: 15px;
  display: flex;
  > div {
    padding: 0 15px;
    border-right: 1px solid rgba(0, 0, 0, 0.14);
  }
  > div:last-child {
    border: none;
  }
`;

export const RateIcon = styled.div`
  display: flex;
  padding-left: 0;
  cursor: pointer;
  align-items: center;
`;

export const TextRate = styled.div`
  color: #fed700;
  border-bottom-color: #fed700;
  border-bottom: 1px solid;
  font-size: 1rem;
  margin-right: 5px;
  padding-bottom: 1px;
`;

export const StarRate = styled.div`
  padding: 4px 0;
`;

export const CountNumber = styled.div`
  font-size: 1rem;
  color: #222;
  margin-right: 5px;
  padding-bottom: 1px;
`;

export const TextEvaluate = styled.div`
  padding: 4px 0;
  font-size: 0.875rem;
  color: #767676;
  text-transform: capitalize;
`;

export const CountEvaluate = styled.div`
  display: flex;
  align-items: center;
  ${CountNumber} {
    border-bottom: 1px solid #555;
  }
`;

export const CountSold = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentPriceWrap = styled.div`
  margin-top: 10px;
`;

export const ContentPrice = styled.div`
  padding: 15px 20px;
  background: #f8f8f8;
  flex-wrap: wrap;
  display: flex;
  flex-basis: 625px;
  min-height: 1.875rem;
  align-items: center;
`;

export const PriceSale = styled.div`
  font-size: 1rem;
  text-decoration: line-through;
  color: #929292;
  margin-right: 10px;
`;

export const PriceSell = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap-reverse;
`;

export const Price = styled.div`
  font-size: 1.875rem;
  font-weight: 500;
  color: #fed700;
  @media (max-width: 992px) {
    font-size: 1.2rem;
  }
`;

export const PercentSale = styled.div`
  margin-left: 15px;
  font-size: 0.75rem;
  color: #fff;
  text-transform: uppercase;
  background: #fed700;
  border-radius: 2px;
  padding: 2px 4px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
`;

export const ShippingWrap = styled.div``;
export const ContentMain = styled.div`
  margin-top: 1.5625rem;
  padding: 0 1.25rem;
  > div {
    padding-bottom: 25px;
    color: #222;
    display: flex;
    align-items: center;
  }
  > div:last-child {
    padding-bottom: 0;
  }
  label {
    color: #757575;
    width: 110px;
    text-transform: capitalize;
    flex-shrink: 0;
    align-items: center;
  }
  ${ShippingWrap} {
    align-items: flex-start;
  }
`;

export const ShippingContent = styled.div``;

export const FreeShip = styled.div`
  color: #222;
  margin-bottom: 10px;
`;

export const TitleShip = styled.div`
  display: flex;
  align-items: center;
  color: #222;
  img {
    margin: 0 5px -2px 0;
  }
`;

export const ContentShip = styled.div`
  color: rgba(0, 0, 0, 0.54);
  font-weight: 300;
  margin-top: 0.125rem;
  margin-left: 1.875rem;
`;

export const OptionsWrap = styled.div``;

export const OptionInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionContent = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

export const OptionMain = styled.div`
  display: flex;
  flex-basis: 32.1875rem;
  max-width: 32.1875rem;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const OptionProduct = styled.button`
  min-width: 5rem;
  max-width: 10rem;
  min-height: 2.125rem;
  padding: 0.25rem 0.75rem;
  margin: 0 8px 8px 0;
  color: #757575;
  text-align: left;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.09);
  position: relative;
  background: #fff;
  outline: 0;
  word-break: break-word;
  word-wrap: break-word;
  overflow: hidden;
  flex: auto;
`;

export const OtionQuanlity = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #757575;
  align-items: center;
  margin-top: 8px;
  ${OptionMain} {
    flex-basis: auto;
    max-width: auto;
    flex-wrap: unset;
    align-items: center;
  }
`;

export const InputQuanlityWrap = styled.div`
  display: flex;
  svg {
    font-size: 10px;
    width: 10px;
    height: 10px;
    flex-shrink: 0;
  }
  input,
  button {
    outline: none;
    cursor: pointer;
    border: 0;
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.09);
    border-radius: 2px;
    background: transparent;
    color: rgba(0, 0, 0, 0.8);
    width: 32px;
    height: 32px;
  }
  input {
    border-left: 0;
    border-right: 0;
    width: 50px;
    height: 32px;
    font-size: 16px;
    font-weight: 400;
    box-sizing: border-box;
    text-align: center;
    cursor: text;
    border-radius: 0;
  }
  button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const ButtonDecrease = styled.button``;
export const ButtonIncrease = styled.button``;
export const InputQuanlity = styled.input``;

export const ContentFooter = styled.div`
  margin: 15px 0;
`;

export const ContentFooterWrap = styled.div`
  padding-left: 20px;
`;

export const ContentFooterInner = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  overflow: hidden;
  text-overflow: ellipsis;
  flex-direction: column;
  font-size: 14px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 9%);
  border-radius: 2 px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  outline: 0;
  cursor: pointer;
  margin-right: 15px;
  min-width: 11.25rem;
  padding: 0 0.75rem;
  font-size: 14px;
  height: 48px;
  background: rgba(255, 238, 34, 0.1);
  color: #333e48;
  border: 1px solid #fed700;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
`;

export const AddToCart = styled(Button)`
  svg {
    margin-right: 10px;
    color: #333e48;
    stroke: #333e48;
    font-size: 1.25rem;
    display: inline-block;
    width: 1em;
    height: 1em;
    fill: currentColor;
    position: relative;
  }
  display: flex;
  flex-direction: row;
  @media (max-width: 992px) {
    flex: 1;
    margin-top: 10px;
  }
`;
export const BuyProduct = styled(Button)`
  color: #333e48;
  background: #fed700;
  @media (max-width: 992px) {
    flex: 1;
    margin-top: 10px;
  }
`;
