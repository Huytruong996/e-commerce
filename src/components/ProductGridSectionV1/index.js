import React from "react";
import { Container, SectionContent } from "../../globalStyles";
import {
  ProductGridContent,
  Title,
  TitleWrapper,
} from "./ProductGridSectionV1.elements";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Autoplay, Navigation } from "swiper";
import Product from "../Product";

const ProductGridSectionV1 = ({ datas }) => {
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
  SwiperCore.use([Keyboard, Autoplay, Navigation]);
  return (
    <SectionContent>
      <Container>
        <ProductGridContent>
          <TitleWrapper>
            <Title>Newarrivals</Title>
          </TitleWrapper>
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            freeMode={true}
            className="mySwiper"
            navigation={true}
            breakpoints={Breakpoints}
          >
            {datas &&
              datas.map((item, index) => (
                <SwiperSlide key={index}>
                  <Product {...item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </ProductGridContent>
      </Container>
    </SectionContent>
  );
};

export default ProductGridSectionV1;
