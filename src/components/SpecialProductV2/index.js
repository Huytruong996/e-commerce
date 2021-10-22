import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LinkProductImage,
  LinkWishList,
  PathQuickShop,
  PathWishList,
  PriceCompare,
  PriceSale,
  ProductButton,
  ProductContent,
  ProductImage,
  ProductImageWrapper,
  ProductName,
  ProductPrice,
  ProductVendor,
  ProductWishList,
  ProductWrapper,
  QuickShop,
} from "../Product/Product.elements";
import { SpecialProductLabel } from "../SpecialProductV1/SpecialProductV1.elements";
import {
  BlockSPecialProduct,
  IConLoadingAdd,
  LinkAdd,
  SpecialProductAdd,
  PriceSpecialCartWrapper,
  SpecialProductHead,
  SpecialProductImageWrap,
  SpecialProductIMGSide,
  TextAdd,
  ThumbImage,
  ThumbImageSide,
  WrapThumbImage,
} from "./SpecialProductV2.elements";

const SpecialProductV2 = (props) => {
  const [ImageIndex, setImgIndex] = useState(0);
  return (
    <BlockSPecialProduct>
      <ProductWrapper>
        <SpecialProductHead>
          <div>
            <ProductVendor>
              <Link to="/">{props.vendorName}</Link>
            </ProductVendor>
            <ProductName>
              <Link to="/">{props.productName}</Link>
            </ProductName>
          </div>
          <ProductImageWrapper>
            <SpecialProductImageWrap>
              <LinkProductImage to="/">
                <SpecialProductIMGSide>
                  <ProductImage
                    data-src={props.Img[ImageIndex]}
                    className="blur-up lazyload"
                  />
                </SpecialProductIMGSide>
                {props.salePercent && (
                  <SpecialProductLabel>
                    <span className="text">Save</span>
                    <span className="percent">{props.salePercent}%</span>
                  </SpecialProductLabel>
                )}
              </LinkProductImage>
            </SpecialProductImageWrap>
          </ProductImageWrapper>
          <WrapThumbImage>
            {props.thumbImg.map((img, index) => {
              return (
                <ThumbImage
                  key={index}
                  onClick={() => setImgIndex(props.thumbImg.indexOf(img))}
                >
                  <ThumbImageSide>
                    <ProductImage src={img} />
                  </ThumbImageSide>
                </ThumbImage>
              );
            })}
          </WrapThumbImage>
        </SpecialProductHead>
        <ProductContent>
          <PriceSpecialCartWrapper>
            <ProductPrice>
              <PriceSale>{props.Price}</PriceSale>
              {props.PriceCompare && (
                <PriceCompare>{props.PriceCompare}</PriceCompare>
              )}
            </ProductPrice>
            <SpecialProductAdd>
              <LinkAdd to="/">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 68 64"
                >
                  <path d="M2.24 0.576c3.52-0.704 7.168 0.192 10.24 1.792 2.624 1.344 4.224 4.096 5.056 6.848 0.96 3.008 1.344 6.144 1.92 9.216 0.96 5.056 2.304 10.048 3.072 15.104 0.384 2.048 0.704 4.224 2.112 5.888 1.408 1.6 3.776 1.664 5.824 1.728 5.376 0 10.816-0.256 16.192 0.128 1.344 0.064 2.88 0 3.648-1.344 3.52-5.312 6.464-11.008 9.28-16.768 0.576-1.152 1.28-2.368 2.56-2.816 1.344-0.448 3.008-0.256 4.032 0.768 1.152 1.28 1.344 3.2 0.704 4.736-2.688 5.376-5.184 10.816-8.512 15.872-1.472 2.176-3.008 4.544-5.184 6.144-1.792 1.28-4.096 0.832-6.144 0.768-6.272-0.064-12.544 0.384-18.752 0-4.16-0.32-8.256-2.368-10.624-5.888-1.728-2.752-2.368-6.080-3.008-9.216-1.28-6.784-2.624-13.504-3.904-20.288-0.384-1.6-0.896-3.392-2.304-4.352-2.24-1.6-5.376-0.256-7.552-1.984-1.344-0.96-0.704-2.688-0.832-4.096-0.128-1.216 1.152-1.984 2.176-2.24zM34.432 4.928c-0.064-1.216 1.408-1.536 2.368-1.792 2.048-0.32 4.608-0.384 6.208 1.152 0.448 3.776 0.64 7.616 0.768 11.392 1.92 0.128 3.84-0.256 5.76-0.064 0.704 0.064 1.536 0.512 1.472 1.344-0.32 1.472-1.472 2.56-2.368 3.712-2.688 3.456-5.76 6.528-8.832 9.536-0.448 0.448-1.024 0.704-1.6 0.448-1.216-0.512-1.984-1.728-2.88-2.688-2.112-2.304-4.224-4.544-6.144-6.912-0.96-1.216-2.176-2.24-2.624-3.712-0.256-0.832 0.512-1.6 1.344-1.664 1.92-0.256 3.84 0.128 5.76 0 0.256-3.584 0.384-7.168 0.768-10.752zM25.28 51.584c2.432-0.704 5.184 0 6.784 1.856 2.368 2.624 1.984 7.232-0.96 9.216-3.136 2.304-8.448 1.216-9.92-2.56-1.664-3.328 0.64-7.616 4.096-8.512zM45.376 53.504c2.432-2.88 7.36-2.944 9.856-0.128 2.112 2.304 2.048 6.208-0.064 8.512-1.216 1.28-2.944 2.048-4.672 2.112h-0.128c-1.856-0.064-3.776-0.832-4.928-2.24-2.048-2.304-2.112-6.016-0.064-8.256z"></path>
                </svg>
                <IConLoadingAdd
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 64 64"
                >
                  <path d="M31.872 0c-7.296 0-14.592 2.496-20.48 7.424v0c11.072-8.96 27.392-8.32 37.632 1.984 8.576 8.576 10.496 21.248 5.696 31.68-0.64 1.856-0.32 3.2 0.768 4.352 1.344 1.28 3.904 1.472 5.376 0 0.192-0.192 0.768-0.96 0.96-1.536 4.544-11.52 2.112-25.152-7.168-34.496-6.336-6.272-14.592-9.408-22.784-9.408zM5.696 17.536c-0.896 0-1.856 0.32-2.496 1.024-0.192 0.192-0.832 0.96-0.96 1.536-4.544 11.52-2.176 25.152 7.168 34.496 11.84 11.84 30.656 12.48 43.264 1.984v0c-11.072 8.96-27.392 8.32-37.696-1.984-8.576-8.576-10.432-21.312-5.696-31.68 0.704-1.856 0.384-3.2-0.768-4.352-0.704-0.704-1.728-1.088-2.816-1.024z"></path>
                </IConLoadingAdd>
                <TextAdd>Add to cart</TextAdd>
              </LinkAdd>
            </SpecialProductAdd>
          </PriceSpecialCartWrapper>
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
    </BlockSPecialProduct>
  );
};

export default SpecialProductV2;
