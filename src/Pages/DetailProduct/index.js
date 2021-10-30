import React, { useContext } from "react";
import { HeaderMenu, HeaderTop, ShopifySectionMobile } from "../../components";
import BreadCrumb from "../../components/BreadCrumb";
import {
  HeaderTopData,
  HeaderVerticalMenuData,
  ProductGridSectionV1Data,
} from "../../components/Data";
import DetailDescription from "../../components/DetailDesciption";
import MenuMobile from "../../components/MenuMobile";
import ProductDetailCard from "../../components/ProductDetailCard";
import ProductReview from "../../components/ProductReview";
import SuggestProduct from "../../components/SuggestProduct";
import { BodyContent, Container, DetailProductWrap } from "../../globalStyles";
import StickyHeader from "../../helper/StickyHeader";

const DetailProduct = ({
  DetailProduct,
  opened,
  handleToggle,
  handleToggleBody,
}) => {
  const { headerRef, isSticky } = StickyHeader();
  return (
    <div>
      <header ref={headerRef}>
        <HeaderTop
          {...HeaderTopData}
          isSticky={isSticky}
          handleToggle={handleToggle}
        />
        <HeaderMenu isSticky={isSticky} />
        <MenuMobile {...HeaderVerticalMenuData} opened={opened} />
        <ShopifySectionMobile />
      </header>
      <BodyContent opened={opened} onClick={handleToggleBody}>
        <DetailProductWrap>
          <Container>
            <BreadCrumb />
            <ProductDetailCard {...DetailProduct} />
            <DetailDescription />
            <ProductReview />
          </Container>
        </DetailProductWrap>
        <Container>
          <SuggestProduct {...ProductGridSectionV1Data} />
        </Container>
      </BodyContent>
    </div>
  );
};

export default DetailProduct;
