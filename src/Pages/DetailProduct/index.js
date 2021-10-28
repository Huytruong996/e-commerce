import React from "react";
import { HeaderMenu, HeaderTop } from "../../components";
import BreadCrumb from "../../components/BreadCrumb";
import { HeaderTopData } from "../../components/Data";
import DetailDescription from "../../components/DetailDesciption";
import ProductDetailCard from "../../components/ProductDetailCard";
import ProductReview from "../../components/ProductReview";
import { Container, DetailProductWrap } from "../../globalStyles";

const DetailProduct = ({ DetailProduct }) => {
  return (
    <div>
      <HeaderTop {...HeaderTopData} />
      <HeaderMenu />
      <DetailProductWrap>
        <Container>
          <BreadCrumb />
          <ProductDetailCard {...DetailProduct} />
          <DetailDescription />
          <ProductReview />
        </Container>
      </DetailProductWrap>
    </div>
  );
};

export default DetailProduct;
