import React from "react";
import { HeaderMenu, HeaderTop } from "../../components";
import { HeaderTopData } from "../../components/Data";
import ProductDetailCard from "../../components/ProductDetailCard";
import { Container } from "../../globalStyles";

const DetailProduct = ({ DetailProduct }) => {
  return (
    <div>
      <HeaderTop {...HeaderTopData} />
      <HeaderMenu />
      <Container>
        <ProductDetailCard {...DetailProduct} />
      </Container>
    </div>
  );
};

export default DetailProduct;
