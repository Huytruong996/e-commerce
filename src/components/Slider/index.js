import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.css";

import "./style.scss";
import {
  BackgroundCover,
  ContainerTextBox,
  Heading,
  IIMGBackgroundCoverMobile,
  ImageLayerBox,
  ImageLayerSlide,
  IMGBackgroundCover,
  IMGContent,
  SLiderContainer,
  SliderContent,
  SliderWrapper,
  SubHeading,
} from "./Slider.elements";

const Slider = ({ Sliders }) => {
  SwiperCore.use([Keyboard, Pagination, Autoplay]);

  const [activeSlide, setActiveSlide] = useState(0);

  const changeSLide = (change) => {
    const active = change;
    setActiveSlide(active);
  };

  return (
    <React.Fragment>
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        onSlideChange={(e) => changeSLide(e.activeIndex)}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {Sliders.map((slide, index) => (
          <SwiperSlide key={index}>
            <SliderWrapper>
              <BackgroundCover active={activeSlide === index}>
                <IMGBackgroundCover
                  data-src={
                    require("../../images/sliders/cover/coverSlide.jpg").default
                  }
                  className="blur-up lazyload"
                />
                <IIMGBackgroundCoverMobile src={slide.imgMobile} />
              </BackgroundCover>
              <SliderContent active={activeSlide === index}>
                <ContainerTextBox>
                  <Heading>{slide.HeadingText}</Heading>
                  <SubHeading>
                    TIMEPIECES THAT
                    <br />
                    MAKE A STATEMENT
                    <br />
                    UP TO <strong> 40% OFF</strong>
                  </SubHeading>
                </ContainerTextBox>
                <ImageLayerBox>
                  <ImageLayerSlide>
                    <IMGContent
                      data-src={slide.img}
                      className="blur-up lazyload"
                    />
                  </ImageLayerSlide>
                </ImageLayerBox>
              </SliderContent>
            </SliderWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

export default Slider;
