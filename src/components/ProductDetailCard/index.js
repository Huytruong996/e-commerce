import React, { useState } from "react";
import {
  AddToCart,
  BorderThumb,
  ButtonDecrease,
  ButtonIncrease,
  BuyProduct,
  Content,
  ContentFooter,
  ContentFooterInner,
  ContentFooterWrap,
  ContentInner,
  ContentMain,
  ContentPrice,
  ContentPriceWrap,
  ContentRate,
  ContentShip,
  ContentTitle,
  ContentWrap,
  CountEvaluate,
  CountNumber,
  CountSold,
  FreeShip,
  ImageThumb,
  InputQuanlity,
  InputQuanlityWrap,
  ItemThumb,
  LikeLabel,
  MainImage,
  OptionContent,
  OptionInner,
  OptionMain,
  OptionProduct,
  OptionsWrap,
  OtionQuanlity,
  PercentSale,
  Price,
  PriceSale,
  PriceSell,
  RateIcon,
  ShippingContent,
  ShippingWrap,
  SlideThumbs,
  StarRate,
  TextEvaluate,
  TextRate,
  ThumbImageContent,
  ThumbImageInner,
  TitleShip,
} from "./ProductDetailCard.elements";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import StarRateSection from "../StarRateSection";
import { SectionContent } from "../../globalStyles";

const ProductDetailCard = ({ Images }) => {
  SwiperCore.use([Navigation]);
  const [quanlity, setQuanlity] = useState(1);
  const [ImageId, setImageId] = useState(0);
  const handleChangeQuanlity = (e) => {
    const valueInput = e.target.value.replace(/ /g, "");
    if (isNaN(valueInput)) {
      return;
    }
    if (valueInput != null && valueInput !== "") {
      return setQuanlity(valueInput);
    }
    if (valueInput === null && valueInput === "") {
      return setQuanlity(1);
    }
    return setQuanlity(valueInput);
  };

  const checkQuanlity = () => {
    if (
      quanlity <= 0 ||
      quanlity === "" ||
      isNaN(quanlity) ||
      quanlity === null ||
      quanlity === ""
    ) {
      return setQuanlity(1);
    }
  };

  const handleDecrease = () => {
    const value = quanlity - 1;
    if (value <= 0) {
      return;
    }
    return setQuanlity(value);
  };
  const handleIncrease = () => {
    const value = parseInt(quanlity) + 1;
    return setQuanlity(value);
  };
  return (
    <SectionContent>
      <ContentWrap>
        <ThumbImageContent className="col-12 col-xl-4 col-lg-4 col-md-12">
          <ThumbImageInner>
            <MainImage
              src={Images[ImageId]}
              className="blur-up lazyload"
            ></MainImage>
            <SlideThumbs>
              <Swiper
                cssMode={true}
                navigation={true}
                spaceBetween={2}
                slidesPerView={5}
              >
                {Images &&
                  Images.map((Image, index) => (
                    <SwiperSlide key={index}>
                      <ItemThumb onMouseOver={() => setImageId(index)}>
                        <ImageThumb
                          src={Image}
                          className="blur-up lazyload"
                        ></ImageThumb>
                        <BorderThumb
                          active={ImageId === index ? 1 : 0}
                        ></BorderThumb>
                      </ItemThumb>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </SlideThumbs>
          </ThumbImageInner>
        </ThumbImageContent>
        <Content className="col-12 col-xl-8 col-lg-8 col-md-12">
          <ContentInner>
            <ContentTitle>
              <LikeLabel>Yêu Thích</LikeLabel>
              <span>
                Hộp 10 Khẩu trang N95 (Tiêu Chuẩn Xuất khẩu BFE ≥95%) Khẩu Trang
                Y Tế 5 Lớp VN95 Kháng Khuẩn
              </span>
            </ContentTitle>
            <ContentRate>
              <RateIcon>
                <TextRate>4.8</TextRate>
                <StarRate>
                  <StarRateSection />
                </StarRate>
              </RateIcon>
              <CountEvaluate>
                <CountNumber>34</CountNumber>
                <TextEvaluate>Đánh giá</TextEvaluate>
              </CountEvaluate>
              <CountSold>
                <CountNumber>85</CountNumber>
                <TextEvaluate>Đã bán</TextEvaluate>
              </CountSold>
            </ContentRate>
            <ContentPriceWrap>
              <ContentPrice>
                <PriceSale>₫52.500 - ₫156.000</PriceSale>
                <PriceSell>
                  <Price>₫52.500 - ₫156.000</Price>
                  <PercentSale>50% giảm</PercentSale>
                </PriceSell>
              </ContentPrice>
            </ContentPriceWrap>
            <ContentMain>
              <ShippingWrap>
                <label>Vận chuyển</label>
                <ShippingContent>
                  <FreeShip>
                    <TitleShip>
                      <img
                        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1cdd37339544d858f4d0ade5723cd477.png"
                        width="25"
                        height="15"
                      />
                      Miễn phí vận chuyển
                    </TitleShip>
                    <ContentShip>
                      Miễn phí vận chuyển cho đơn hàng trên ₫50.000
                    </ContentShip>
                  </FreeShip>
                </ShippingContent>
              </ShippingWrap>
              <OptionsWrap>
                <OptionInner>
                  <OptionContent>
                    <label>Chọn Màu</label>
                    <OptionMain>
                      <OptionProduct>
                        Black / Whitedddddddddddddddfsdffffsdfsdfsdfdffd
                      </OptionProduct>
                      <OptionProduct>Black / Blue</OptionProduct>
                      <OptionProduct>Black / Gray</OptionProduct>
                      <OptionProduct>Black / Pink</OptionProduct>
                      <OptionProduct>Black / White</OptionProduct>
                      <OptionProduct>Black / White</OptionProduct>
                      <OptionProduct>Black / White</OptionProduct>
                      <OptionProduct>Black / White</OptionProduct>
                      <OptionProduct>Black / White</OptionProduct>
                    </OptionMain>
                  </OptionContent>
                  <OptionContent>
                    <label>Chọn Màu</label>
                    <OptionMain>
                      <OptionProduct>Black / White</OptionProduct>
                      <OptionProduct>Black / White</OptionProduct>
                      <OptionProduct>Black / White</OptionProduct>
                      <OptionProduct>Black / White</OptionProduct>
                      <OptionProduct>Black / White</OptionProduct>
                    </OptionMain>
                  </OptionContent>
                  <OtionQuanlity>
                    <label>Số lượng</label>
                    <OptionMain>
                      <div style={{ marginRight: "15px" }}>
                        <InputQuanlityWrap>
                          <ButtonDecrease onClick={() => handleDecrease()}>
                            <svg viewBox="0 0 10 10" x="0" y="0">
                              <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                            </svg>
                          </ButtonDecrease>
                          <InputQuanlity
                            type="text"
                            value={quanlity}
                            onChange={(e) => handleChangeQuanlity(e)}
                            onBlur={() => checkQuanlity()}
                          ></InputQuanlity>
                          <ButtonIncrease onClick={() => handleIncrease()}>
                            <svg viewBox="0 0 10 10" x="0" y="0">
                              <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                            </svg>
                          </ButtonIncrease>
                        </InputQuanlityWrap>
                      </div>
                      <div>306 sản phẩm có sẵn</div>
                    </OptionMain>
                  </OtionQuanlity>
                </OptionInner>
              </OptionsWrap>
            </ContentMain>
            <ContentFooter>
              <ContentFooterWrap>
                <ContentFooterInner>
                  <AddToCart>
                    <svg viewBox="0 0 15 15" x="0" y="0">
                      <g>
                        <g>
                          <polyline
                            fill="none"
                            points=".5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5"
                          ></polyline>
                          <circle cx="6" cy="13.5" r="1" stroke="none"></circle>
                          <circle
                            cx="11.5"
                            cy="13.5"
                            r="1"
                            stroke="none"
                          ></circle>
                        </g>
                        <line
                          fill="none"
                          x1="7.5"
                          x2="10.5"
                          y1="7"
                          y2="7"
                        ></line>
                        <line
                          fill="none"
                          x1="9"
                          x2="9"
                          y1="8.5"
                          y2="5.5"
                        ></line>
                      </g>
                    </svg>
                    <span>thêm vào giỏ hàng</span>
                  </AddToCart>
                  <BuyProduct>Mua hàng</BuyProduct>
                </ContentFooterInner>
              </ContentFooterWrap>
            </ContentFooter>
          </ContentInner>
        </Content>
      </ContentWrap>
    </SectionContent>
  );
};

export default ProductDetailCard;
