import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Pagination, Autoplay, Navigation } from "swiper";
import {
  Container,
  ContentTabWrapper,
  SectionContent,
  TabSection,
} from "../../globalStyles";
import Product from "../Product";
import SpecialProductV1 from "../SpecialProductV1";
import {
  LinkItem,
  NavItem,
  NavTabs,
  NavTabWrapper,
  ProductItem,
  ProductRow,
  TabListProduct,
  TabPanel,
  TabSpecialProduct,
  WrappContent,
} from "./ProductSectionV1.element";

const ProductSecionV1 = ({ datas }) => {
  SwiperCore.use([Keyboard, Pagination, Autoplay, Navigation]);
  const [active, setActive] = useState(1);
  let SliderArray = (array, chunk) => {
    const result = array.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / chunk);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);
    return [...result];
  };

  return (
    <SectionContent>
      <TabSection>
        <Container>
          <WrappContent>
            <NavTabWrapper>
              <NavTabs>
                {datas &&
                  datas.map((data, index) => (
                    <NavItem key={index}>
                      <LinkItem
                        to="/"
                        onClick={() => setActive(data.id)}
                        active={active === data.id ? 1 : 0}
                      >
                        {data.Tabname}
                      </LinkItem>
                    </NavItem>
                  ))}
              </NavTabs>
            </NavTabWrapper>
            <ContentTabWrapper>
              {datas &&
                datas.map((data, index) => {
                  const SLides = SliderArray(data.Products, 8);
                  return (
                    <TabPanel active={active === data.id ? 1 : 0} key={index}>
                      <TabSpecialProduct>
                        <SpecialProductV1 {...data.ProductSpecial} />
                      </TabSpecialProduct>
                      <TabListProduct>
                        <Swiper
                          navigation={true}
                          spaceBetween={2}
                          slidesPerView={1}
                        >
                          {SLides &&
                            SLides.map((Slide, index) => {
                              const itemProducts = SliderArray(Slide, 2);
                              return (
                                <SwiperSlide key={index}>
                                  <ProductRow>
                                    {itemProducts.map((items, index) => {
                                      return items.map((item, index) => {
                                        return (
                                          <ProductItem
                                            key={index}
                                            className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6"
                                          >
                                            <Product {...item} key={index} />
                                          </ProductItem>
                                        );
                                      });
                                    })}
                                  </ProductRow>
                                </SwiperSlide>
                              );
                            })}
                        </Swiper>
                      </TabListProduct>
                    </TabPanel>
                  );
                })}
            </ContentTabWrapper>
          </WrappContent>
        </Container>
      </TabSection>
    </SectionContent>
  );
};

export default ProductSecionV1;
