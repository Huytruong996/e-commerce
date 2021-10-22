import React from "react";
import { Link } from "react-router-dom";
import {
  PriceCompare,
  PriceSale,
  ProductGroupName,
  ProductImage,
  ProductImageWrapper,
  ProductName,
  ProductPrice,
} from "../Product/Product.elements";
import {
  LabelSale,
  LinkGoto,
  LinkProductImage,
  LinkWishList,
  PathGoto,
  PathQuickShop,
  PathWishList,
  PriceCartWrapper,
  ProductButton,
  ProductContent,
  ProductGotoDetail,
  ProductHeader,
  ProductImageSide,
  ProductLabel,
  ProductVendor,
  ProductWishList,
  ProductWrapper,
  QuickShop,
} from "./Product.elements";

const Product = (props) => {
  return (
    <ProductWrapper>
      <ProductImageWrapper>
        <ProductGroupName>
          <ProductVendor>
            <Link to="/">{props.vendorName}</Link>
          </ProductVendor>
          <ProductName>
            <Link to="/">{props.productName}</Link>
          </ProductName>
        </ProductGroupName>
        <ProductHeader>
          <LinkProductImage to="/">
            <ProductImageSide>
              <ProductImage
                data-src={props.img}
                className="blur-up lazyload"
              ></ProductImage>
            </ProductImageSide>
            {props.salePercent && (
              <ProductLabel>
                <LabelSale>
                  <span>
                    {props.salePercent}
                    <sup>%</sup>
                  </span>
                </LabelSale>
              </ProductLabel>
            )}
          </LinkProductImage>
        </ProductHeader>
      </ProductImageWrapper>
      <ProductContent>
        <PriceCartWrapper>
          <ProductPrice>
            <PriceSale>{props.Price}</PriceSale>
            {props.PriceCompare && (
              <PriceCompare>{props.PriceCompare}</PriceCompare>
            )}
          </ProductPrice>
          <ProductGotoDetail>
            <LinkGoto to="/">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 64 64"
              >
                <PathGoto d="M61.696 31.872q0 0.512-0.32 0.896l-13.76 12.608q-0.512 0.512-1.216 0.256-0.704-0.32-0.704-1.088v-8h-44.544q-0.512 0-0.832-0.32t-0.32-0.768v-6.912q0-0.448 0.32-0.768t0.832-0.32h44.544v-8q0-0.768 0.704-1.088t1.216 0.192l13.76 12.48q0.32 0.384 0.32 0.832z" />
              </svg>
            </LinkGoto>
          </ProductGotoDetail>
        </PriceCartWrapper>
        <ProductButton>
          <QuickShop>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 64 64"
            >
              <PathQuickShop d="M32 10.688c-21.312 0-29.312 21.312-29.312 21.312s8 21.312 29.312 21.312 29.312-21.312 29.312-21.312-8-21.312-29.312-21.312zM32 16c14.080 0 21.184 11.392 23.488 16-2.304 4.544-9.472 16-23.488 16-14.080 0-21.184-11.392-23.488-16 2.304-4.544 9.472-16 23.488-16zM32 21.312c-5.903 0-10.688 4.785-10.688 10.688s4.785 10.688 10.688 10.688v0c5.903 0 10.688-4.785 10.688-10.688s-4.785-10.688-10.688-10.688v0zM32 26.688c2.934 0 5.312 2.378 5.312 5.312s-2.378 5.312-5.312 5.312v0c-2.934 0-5.312-2.378-5.312-5.312s2.378-5.312 5.312-5.312v0z" />
            </svg>
            <span>View</span>
          </QuickShop>
          <ProductWishList>
            <LinkWishList to="/">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 26 22"
              >
                <PathWishList d="M23.8185 6.71922C23.8185 5.93296 23.716 5.24926 23.5109 4.66811C23.3058 4.08696 23.0408 3.61691 22.7161 3.25797C22.3913 2.89902 21.9982 2.617 21.5367 2.41189C21.0752 2.20678 20.6308 2.05294 20.2034 1.95039C19.7761 1.84783 19.3061 1.81365 18.7933 1.84783C18.2805 1.88202 17.7507 2.00166 17.2037 2.20677C16.6567 2.41189 16.1269 2.71955 15.6141 3.12978C15.1013 3.54 14.6911 3.88185 14.3834 4.15533C14.0758 4.42881 13.7852 4.71939 13.5117 5.02705C13.3408 5.24926 13.11 5.36036 12.8194 5.36036C12.5289 5.36036 12.2981 5.24926 12.1272 5.02705C11.8879 4.77066 11.5973 4.48009 11.2555 4.15533C10.9136 3.83057 10.5034 3.48872 10.0248 3.12978C9.54622 2.77083 9.01634 2.46316 8.4352 2.20677C7.85405 1.95039 7.32418 1.83074 6.84558 1.84783C6.36699 1.86492 5.89695 1.89911 5.43545 1.95039C4.97395 2.00166 4.52954 2.1555 4.10222 2.41189C3.67491 2.66828 3.28178 2.9503 2.92283 3.25797C2.56389 3.56564 2.29895 4.03568 2.12803 4.66811C1.9571 5.30054 1.85455 5.98424 1.82036 6.71922C1.82036 8.30883 2.71772 10.001 4.51245 11.7957L12.8194 19.7951L21.1264 11.7957C22.9212 10.001 23.8185 8.30883 23.8185 6.71922ZM25.6389 6.71922C25.6389 8.82161 24.545 10.9667 22.3571 13.1546L13.4604 21.7436C13.2895 21.9145 13.0758 22 12.8194 22C12.5631 22 12.3494 21.9145 12.1785 21.7436L3.25614 13.1289L2.87156 12.7444C2.70063 12.5734 2.43569 12.2572 2.07675 11.7957C1.71781 11.3342 1.39305 10.8727 1.10247 10.4112C0.811898 9.94972 0.555509 9.37712 0.333306 8.69341C0.111102 8.00971 0 7.35164 0 6.71922C0 4.61683 0.606787 2.97594 1.82036 1.79655C3.03394 0.617164 4.70901 0.018924 6.84558 0.00183139C7.42673 0.00183139 8.02497 0.104384 8.64031 0.309495C9.25564 0.514607 9.82824 0.796636 10.3581 1.15558C10.888 1.51452 11.3495 1.83928 11.7426 2.12986C12.1357 2.42043 12.4947 2.74519 12.8194 3.10414C13.1613 2.76228 13.5202 2.43752 13.8963 2.12986C14.2723 1.82219 14.7338 1.49743 15.2808 1.15558C15.8277 0.813728 16.4003 0.531699 16.9986 0.309495C17.5968 0.0872916 18.1951 -0.0152612 18.7933 0.00183139C20.9299 0.00183139 22.605 0.600071 23.8185 1.79655C25.0321 2.99303 25.6389 4.63392 25.6389 6.71922Z" />
              </svg>
              <span>Wishlist</span>
            </LinkWishList>
          </ProductWishList>
        </ProductButton>
      </ProductContent>
    </ProductWrapper>
  );
};

export default Product;
