import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { ProductGridSectionV1Data } from "../../components/Data";
import DetailDescription from "../../components/DetailDesciption";
import ProductDetailCard from "../../components/ProductDetailCard";
import ProductReview from "../../components/ProductReview";
import SuggestProduct from "../../components/SuggestProduct";
import { Container, DetailProductWrap } from "../../globalStyles";
import MainLayout from "../../layouts/MainLayout";

const DetailProduct = ({ DetailProduct }) => {
  return (
    <MainLayout>
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
    </MainLayout>
  );
};

export default DetailProduct;
