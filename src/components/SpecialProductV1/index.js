import React from "react";
import { Link } from "react-router-dom";
import CountDownComponent from "../CountDown";
import {
  ProductImage,
  ProductImageWrapper,
  ProductName,
  ProductPrice,
} from "../Product/Product.elements";
import {
  BlockSpecialProduct,
  DealProgress,
  DealStock,
  ProductSpecialContent,
  ProductSpecialHeader,
  ProductSpecialWrapper,
  Progress,
  ProgressBar,
  SpecialOfferText,
  SpecialProductLabel,
  StockAvailable,
  StockSold,
  SpecialProductImageSide,
  SpecialPriceSale,
  SpecialPriceCompare,
} from "./SpecialProductV1.elements";

const SpecialProductV1 = (props) => {
  const progress = Math.ceil((props.Sold / props.Total) * 100);
  return (
    <BlockSpecialProduct>
      <ProductSpecialWrapper>
        <ProductSpecialHeader>
          <ProductImageWrapper>
            <SpecialOfferText>
              Special <br /> Offer
            </SpecialOfferText>
            <Link to="/">
              <SpecialProductImageSide>
                <ProductImage src={props.img}></ProductImage>
              </SpecialProductImageSide>
            </Link>
            {props.salePercent && (
              <SpecialProductLabel>
                <span className="text">Save</span>
                <span className="percent">{props.salePercent}%</span>
              </SpecialProductLabel>
            )}
          </ProductImageWrapper>
        </ProductSpecialHeader>
        <ProductSpecialContent>
          <ProductName>
            <Link to="/">{props.productName}</Link>
          </ProductName>
          <ProductPrice>
            <SpecialPriceSale>{props.Price}</SpecialPriceSale>
            {props.PriceCompare && (
              <SpecialPriceCompare>{props.PriceCompare}</SpecialPriceCompare>
            )}
          </ProductPrice>
          <DealProgress>
            <DealStock>
              <StockSold>
                Already Sold: <strong>{props.Sold}</strong>
              </StockSold>
              <StockAvailable>
                Available: <strong>{props.Available}</strong>
              </StockAvailable>
            </DealStock>
            <Progress>
              <ProgressBar value={progress} />
            </Progress>
          </DealProgress>
        </ProductSpecialContent>
        {/* <CountDownComponent thenVal={props.CountDownSale} /> */}
      </ProductSpecialWrapper>
    </BlockSpecialProduct>
  );
};

export default SpecialProductV1;
