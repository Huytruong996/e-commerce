import React from "react";
import {
  SuggestContent,
  SuggestHeader,
  SuggestMore,
  SuggestProductWrap,
  SuggestTitle,
} from "./SuggestProduct.elements";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Product from "../Product";
const SuggestProduct = ({ datas }) => {
  SwiperCore.use([Navigation]);
  const Breakpoints = {
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  };
  return (
    <SuggestProductWrap>
      <SuggestHeader>
        <SuggestTitle>CÓ THỂ BẠN CŨNG THÍCH</SuggestTitle>
        <SuggestMore to="/">
          <button>
            Xem tất cả
            <svg
              enableBackground="new 0 0 11 11"
              viewBox="0 0 11 11"
              x="0"
              y="0"
            >
              <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
            </svg>
          </button>
        </SuggestMore>
      </SuggestHeader>
      <SuggestContent>
        <Swiper
          cssMode={true}
          navigation={true}
          spaceBetween={0}
          slidesPerView={2}
          breakpoints={Breakpoints}
        >
          {datas &&
            datas.map((item, index) => (
              <SwiperSlide key={index}>
                <Product {...item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </SuggestContent>
    </SuggestProductWrap>
  );
};

export default SuggestProduct;
